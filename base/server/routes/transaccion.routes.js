const express = require('express');
const router = express.Router();

const transaccionController = require('../controllers/transaccion.controller');

router.get('/', transaccionController.getTransaccionList);
 

module.exports = router;