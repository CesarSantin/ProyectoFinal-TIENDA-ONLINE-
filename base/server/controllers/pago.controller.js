'use strict';
const Pago = require('../models/Pagos');

const PagoController ={};

PagoController.getPagoList = (req, res) => {
    Pago.findAll().then((pagos) => {
        res.json(pagos);
    }).catch((err) => {
        res.status(500).send();
    });
};

module.exports = PagoController;