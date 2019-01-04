'use strict';
const Cuenta = require('../models/Cuenta');
const bcrypt = require('bcrypt');

var CuentaController = {};

CuentaController.getCuentaList = (req, res) => {
    Cuenta.findAll().then((cuenta) => {
        res.json(cuenta);
    }).catch((err) => {
        res.status(500).send();
    });
};

CuentaController.saveCuenta = (req, res) => {
    Cuenta.findOne({ where: { correo: req.body.correo } })
        .then((result) => {
            if(!result){
                req.body.clave = bcrypt.hashSync(req.body.clave, 8);
                Cuenta.create(req.body).then((clave) =>{
                    if(cuenta){
                        res.json({ msg: 'Cuenta Saved!' });
                    }else{
                        res.json({ msg: 'The cuenta has not been saved.' });
                    }
                }).catch((err) => {
                    res.status(500).send();
                });
            }else{
                res.json({ msg: 'The cuenta entered already exists!' });
            }
        }).catch((err) => {
            res.status(500).send();
        });        
};

CuentaController.getCuenta = (req, res) => {
    Cuenta.findOne({
        where: { external_id: req.params.ext }
    }).then((cuenta) => {
        res.json(cuenta);
    }).catch((err) => {
        res.status(500).send();
    });
    
};

CuentaController.getCuentaPersona = (req, res) => {
    Cuenta.findOne({
        where: { cedula: req.params.ext }
    }).then((cuenta) => {
        if(cuenta){
            cuenta.getPersona().then((persona) => {
                res.json(persona);
            }).catch((err) => {
                res.status(500).send();
            }); 
        }else{
            res.json({ msg: 'Account not found!' });
        }
    }).catch((err) => {
        res.status(500).send();
    });   
}

CuentaController.editCuenta = (req, res) => {
    Cuenta.update({
        clave: req.body.clave
    },
    { where: { external_id: req.params.ext } }).then((cuenta) => {
        if(cuenta){
            res.json({ msg: 'Account updated!' });
        }else{
            res.json({ msg: 'Account not found!' });
        }
    }).catch((err) => {
        res.status(500).send();
    });     
};

module.exports = CuentaController;