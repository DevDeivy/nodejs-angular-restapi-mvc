//app.js es el archivo principal de la aplicacion para el backend.
'use strict';

//cargar modulos de node para cargar el servidor
const express = require('express');
const bodyParser = require('body-parser');

//ejecutar express(http)
const app = express(); //crear app y pasarlo a express

//cargar ficheros route.js
const articleRouts = require('./routes/article');

//middlewares: un middleware es una funcion que se ejecuta antes de un routa
app.use(bodyParser.json()); //convertir datos enviados a json
app.use(bodyParser.urlencoded({ extended: false }));

//CORS: permite que los requests de otros dominios se acepten
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//cargar las rutas
app.use('/api', articleRouts);

//volver este codigo en un modulo importable
module.exports = app; 
