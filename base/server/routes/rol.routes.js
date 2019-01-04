const express = require('express');
const router = express.Router();

const rolController = require('../controllers/rol.controller');

router.get('/', rolController.getRolList)
        .post('/', rolController.saveRol);
router.get('/:id', rolController.getRol);

module.exports = router;