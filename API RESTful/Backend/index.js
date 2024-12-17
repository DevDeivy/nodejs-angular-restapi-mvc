'use strict';

const mongoose = require('mongoose');
const app = require('./app');
const port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_blog2') //conexion a la base de datos
    .then(() => {                                                 
        console.log('conexion a la base de datos exitosa')    

        //crear el servidor y escuchar peticiones HTTP (API RESTful)
        app.listen(port, () => {
            console.log(`servidor corriendo en ${port}`)
        })
    });