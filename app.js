'use strict'
//Cargar modulos de node para crear servidor
var express = require('express');
var bodyParse = require('body-parser');

//Ejecutar express (http)
var app = express();

//cargar ficheros rutas
var affiliate_routes = require('./routes/affiliate');

//Middelwares
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());

//CORS

//Añadir prefijos a rutas / cargar rutas 
app.use('/affiliate',affiliate_routes);


//Exportar modulo (fichero actual)
module.exports = app;   
