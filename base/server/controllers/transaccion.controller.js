'use strict';
const Transaccion = require('../models/Transaccion');

const TransaccionController ={};

TransaccionController.getTransaccionList = (req, res) => {
    Transaccion.findAll().then((transaccion) => {
        res.json(transaccion);
    }).catch((err) => {
        res.status(500).send();
    });
};

module.exports = TransaccionController;