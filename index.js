'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = 3100;


mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/fondo_amigo', {useNewUrlParser: true})
    .then(() => {
        console.log('Ok conexion mentiras si');

        //crear servidor y escurar petisiones http
        app.listen(port, () => {
            console.log('Servidor correndo en http://localhost:'+port);
        })

    });