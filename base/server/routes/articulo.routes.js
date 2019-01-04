const express = require('express');
const router = express.Router();

const articuloController = require('../controllers/articulo.controller');

router.get('/', articuloController.getArticuloList);
 

module.exports = router;