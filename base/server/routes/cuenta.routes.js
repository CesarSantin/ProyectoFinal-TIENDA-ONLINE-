const express = require('express');
const router = express.Router();

const cuentaController= require('../controllers/cuenta.controller');

router.get('/', cuentaController.getCuentaList)
        .post('/', cuentaController.saveCuenta);
router.get('/:ext', cuentaController.getCuenta)
        .put('/:ext', cuentaController.editCuenta);
router.get('/rol/:ext', cuentaController.getCuentaPersona);

module.exports = router;