'use strict';
const Categoria = require('../models/Categorias');

const CategoriaController ={};

CategoriaController.getCategoriaList = (req, res) => {
    Categoria.findAll().then((categorias) => {
        res.json(categorias);
    }).catch((err) => {
        res.status(500).send();
    });
};

module.exports = CategoriaController;