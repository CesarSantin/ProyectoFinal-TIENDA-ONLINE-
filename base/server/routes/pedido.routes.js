const express = require('express');
const router = express.Router();

const pedidoController = require('../controllers/pedido.controller');

router.get('/', pedidoController.getPedidoList);
 

module.exports = router;