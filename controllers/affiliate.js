'use strict'

var validator = require('validator');
var Affiliate = require('../models/affiliate');
var controller = {
    datosAfiliado: (req, res) => {
        return res.status(200).send({
            afiliado: 'Jairo Niño',
            prestamos: '55'
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'ok accion affiliate'
        })
    },

    save: (req, res) => {
        var params = req.body
        try {
            var validate_identification = !validator.isEmpty(params.identification);
            var validate_name = !validator.isEmpty(params.name);

        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar!!'
            })
        }

        if (validate_identification && validate_name) {

            //crear el objeto a guardar
            var affiliate = new Affiliate();

            //asignar valores
            affiliate.identification = params.identification;
            affiliate.name = params.name;

            //Guardar el afiliado
            affiliate.save((err, affiliateStored) => {
                if(err || !affiliateStored){
                    return res.status(404).send({
                        status: 'error',
                        message: 'El afiliado no se ha guardado'
                    });
                }
                
                //devolver respuesta
                return res.status(200).send({
                    status: 'success',
                    affiliate: affiliateStored
                });
            });
        }
        else {
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son validos'
            });
        }
    },

    getAll: (req, res) => {
        var query = Affiliate.find({});
        var last = req.params.last;
        if(last || last != undefined){
            query.limit(2);
        }
        query.sort('-name').exec((err, affiliates) => {
            if(err){
                
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devvolver los datos'
                });
            }
            if(!affiliates){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay datos para mostrar'
                });
            }
            return res.status(200).send({
                status: 'success',
                affiliates
            });
        });
    },

    getAffiliate: (req, res) => {
        
        var affiliateId = req.params.id;
        if(!affiliateId || affiliateId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No hay datos para mostrar'
            });

        }
        Affiliate.findById(affiliateId, (err, affiliate) => {
            if(err || !affiliate){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay datos para mostrar'
                });
            }
            
            return res.status(200).send({
                status: 'success',
                affiliate
            });

        });
    }
}

module.exports = controller;