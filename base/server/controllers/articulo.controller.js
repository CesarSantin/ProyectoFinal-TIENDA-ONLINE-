'use strict';
const Articulo = require('../models/Articulo');

const ArticuloController ={};

ArticuloController.getArticuloList = (req, res) => {
    Articulo.findAll().then((articulo) => {
        res.json(articulo);
    }).catch((err) => {
        res.status(500).send();
    });
};

module.exports = ArticuloController;