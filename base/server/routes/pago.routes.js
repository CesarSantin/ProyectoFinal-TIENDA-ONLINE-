const express = require('express');
const router = express.Router();

const pagoController = require('../controllers/pago.controller');

router.get('/', pagoController.getPagoList);
 

module.exports = router;