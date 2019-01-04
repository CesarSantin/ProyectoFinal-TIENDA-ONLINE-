const express = require('express');
const router = express.Router();

const personaController = require('../controllers/persona.controller');

router.get('/', personaController.getPersonaList)
        .post('/', personaController.savePersona);
router.get('/:cedula', personaController.getPersona)
        .put('/:cedula', personaController.editPersona);
router.get('/rol/:cedula', personaController.getPersonaRol);
router.get('/rol/rol', personaController.getPersonaByRol);

module.exports = router;