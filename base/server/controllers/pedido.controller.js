'use strict';
const Pedido = require('../models/Pedido');

const PedidoController ={};

PedidoController.getPedidoList = (req, res) => {
    Pedido.findAll().then((Pedido) => {
        res.json(Pedido);
    }).catch((err) => {
        res.status(500).send();
    });
};

module.exports = PedidoController;