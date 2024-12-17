'use strict';

const express = require('express');
const article = require('../controllers/article');
const router = express.Router(); //crear router para acceder
const multiparty = require('connect-multiparty');
const midelwareUpload = multiparty({uploadDir: './upload/article'});

//rutas para los artículos
router.post('/save', article.save);
router.get('/getArticles/:last?', article.getArticle);
router.get('/getArticlesId/:id', article.getArticleId);
router.put('/getArticlesId/:id', article.updateArticle); 
router.delete('/getArticlesId/:id', article.deleteArticle);
router.post('/uploadImg/:id', midelwareUpload, article.uploadIMG);
router.get('/getImage/:img', article.getImage);
router.get('/search/:search', article.searchArticles);

module.exports = router;