'use strict';

const validator = require('validator');
const Article = require('../models/article');
const fs = require('fs');
const path = require('path');

const error = 'error';
const file_err = 'imagen no subida o no es compatible'
const type_files_img = 'solo se aceptan imagenes png, jpg, jpeg, gif'



const controller = {

    save: async(req, res) => {
        //racoger parametros por POST
        const params = req.body;
        //validar datos (validator)
        let validate_title, validate_content;

        try{
            validate_title = !validator.isEmpty(params.title);
            validate_content = !validator.isEmpty(params.content);
        } catch (err) {
            return res.status(500).send({
                mensaje: error
            })
        }

        if( validate_title && validate_content){

            //crear el objeto a guardar
            const article = new Article();

            //asignar valores al objeto
            article.title = params.title;
            article.content = params.content;
            article.img = null;

            //guardar el objeto
            try {
                const articleSaved = await article.save();
                return res.status(200).send({
                    article: articleSaved
                });
            } catch (error) {
                return res.status(500).send({
                    mensaje: error
                });
            }

        }else{
            return res.status(500).send({
                mensaje: error
            });
        }

    },
    
    //recuperar los datos de la base de datos
    getArticle: async(req, res) => {

        const last = req.params.last;
        const query = Article.find({})

        if(last || last != undefined){
            query.limit(2);
        }

        try{
            const articleGet = await query.sort('_id').exec();

            if(!articleGet || articleGet.length === 0){
                return res.status(404).send({
                    mensaje: error
                });
            }

            return res.status(200).send({
                mensaje: 'datos recibidos',
                articleGet
            });
            
        } catch (err) {
            return res.status(500).send({
                mensaje: error
            });
        }
    },

    getArticleId: async(req, res) => {

        try{
            //recoger id de la url
            const idArticle = req.params.id;
            
            //comprobar si existe el artículo
            if(!idArticle || idArticle == null){
                return res.status(404).send({
                    mensaje: error
                });
            }
            
            //si existe, buscarlo
            const article = await Article.findById(idArticle);

            if(!article){
                return res.status(404).send({
                    mensaje: error
                });
            }

            return res.status(200).send({
                mensaje: 'datos recibidos',
                article
            });
            
        } catch (err) {
            return res.status(500).send({
                mensaje: error
            });
        }
    },

    updateArticle: async(req, res) => {
        //validar datos
        try {
            //recoger id de la url
            const idArticle = req.params.id;
            
            //recoger los datos que llegan por el put
            const params = req.body;
            const validate_content = !validator.isEmpty(params.title);
            const validate_title = !validator.isEmpty(params.content);
                
            if(validate_title && validate_content){
                //encontrar y actualizar el artículo
                const article = await Article.findOneAndUpdate({_id: idArticle}, params, {new: true});
                if(!article){
                    return res.status(404).send({
                        mensaje: error
                    });
                }

                return res.status(200).send({
                    mensaje: 'datos actualizados',
                    article
                });
            }else{
                return res.status(404).send({
                    mensaje: error
                })
            }
            
        }catch(err){
            return res.status(500).send({
                mensaje: error
            });
        }
        
    },

    deleteArticle: async(req, res) =>{
        try{
            //recoger id de la url
            const idArticle = req.params.id;

            //find and delete
            const article = await Article.findOneAndDelete({_id: idArticle});
            if(!article){
                return res.status(404).send({
                    mensaje: error
                });
            }

            return res.status(200).send({
                mensaje: 'el articulo eliminado fue',
                article
            });

        }catch(err){
            return res.status(500).send({
                mensaje: error
            });
        }
    },
    
    uploadIMG: async(req, res) =>{
        try{
            const idArticle = req.params.id;
            //se configuro el modulo connect-multiparty en router/article.js

            //recoger el fichero de la peticion
            if(!req.files || req.files.img){
                return res.status(404).send({
                    mensaje: file_err
                });
            }

            //nombre y extension del fichero
            const file_path = req.files.file0.path
            const file_split = file_path.split('\\'); //en linux o mac se usa '/'
            
            //nombrar el fichero
            const file_name = file_split[2];
            
            //extension del fichero
            const extension_split = file_name.split('\.');
            const file_extension = extension_split[1];
            
            if(file_extension !== 'png' && file_extension !== 'jpg' && file_extension !== 'jpeg' && file_extension !== 'gif'){ //comprobar la extension (solo imagenes), 
                //si no es valida borrar el fichero
                fs.unlink(file_path,(err) =>{ //fs permite acceder a los archivos del sistema
                    return res.status(404).send({
                        mensaje: type_files_img
                    });
                });
            }else{
                //si es valido, añadir nombre de la imagen y devolverlo
                const article = await Article.findOneAndUpdate({_id: idArticle}, {img: file_name}, {new:true});
                if(!article || article.img == null){
                    return res.status(404).send({
                        mensaje: error
                    });
                }

                return res.status(200).send({
                    article
                });
            }

        }catch(error){
            return res.status(500).send({
                mensaje: error
            });
        }
    },

    getImage: async(req,res) => {
       try{
        //sacar el fichero que nos llega por la url
        const file_img = req.params.img;
        const path_img = 'upload/article/' + file_img;

        const data = await fs.existsSync(path_img);
        if(data){
            return res.sendFile(path.resolve(path_img));
        }else{
            return res.status(404).send({
                mensaje: err
            });
        }

        }catch(error){
            return res.status(500).send({
                mensaje: error
            });
        }
    },

    searchArticles: async(req, res) => {
        try{
            //sacar el string a buscar
            const searchString = req.params.search;

            //find or
            const articles = await Article.find({
                $or:[
                    {"title": {"$regex": searchString, "$options": "i"}}
                ]
            }).sort({date: 1}).exec();

            if(!articles || articles.length == 0){
                return res.status(404).send({
                    mensaje: error
                });
            }

            return res.status(200).send({
                mensaje: 'datos recibidos',
                articles
            });

        } catch(error){
            return res.status(500).send({
                mensaje: error,
            });
        }
    }
} 

module.exports = controller