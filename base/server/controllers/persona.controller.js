'use strict';
const Persona = require('../models/Persona');
const Rol = require('../models/Rol');

const PersonaController = {};

PersonaController.getPersonaList = (req, res) => {
    Person.findAll().then((persona) => {
        res.json(persona);
    }).catch((err) => {
        res.status(500).send();
    });
};

PersonaController.getPersonaByRol = async (rol) => {
    var persona = await Persona.findAll({
        include: [
            { model: Rol, where: { name: rol } }
        ]
    });
    
    return persona;
};

PersonaController.savePersona = (req, res) => {
    Persona.findOne({ where: { cedula: req.body.cedula } })
    .then((result) => {
        if(!result){
            Persona.create(req.body).then((persona) =>{
                if(persona){
                    res.json({ msg: 'Persona Saved!' });
                }else{
                    res.json({ msg: 'The persona has not been saved.' });
                }
            }).catch((err) => {
                res.status(500).send();
            });
        }else{
            res.json({ msg: 'The persona entered already exists!' });
        }
    }).catch((err) => {
        res.status(500).send();
    });        
};

PersonaController.getPersona = (req, res) => {
    Persona.findOne({
        where: { cedula: req.params.cedula },
        attributes: [ 'nombre' ]
    }).then((persona) => {
        res.json(persona);
    }).catch((err) => {
        res.status(500).send();
    });
    
};

PersonaController.getPersonaRol = (req, res) => {
    Persona.findOne({
        where: { cedula: req.params.cedula }
    }).then((persona) => {
        if(persona){
            persona.getRol().then((rol) =>{
                res.json(rol);
            }).catch((err) => {
                res.status(500).send();
            }); 
        }else{
            res.json({ msg: 'Persona not found!' });
        }
    }).catch((err) => {
        res.status(500).send();
    });   
}

PersonaController.editPersona = (req, res) => {
    Persona.update({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        email: req.body.email,
        pais: req.body.pais
    },
    { where: { cedula: req.params.cedula } }).then((persona) => {
        if(persona){
            res.json({ msg: 'Persona updated!' });
        }else{
            res.json({ msg: 'Persona not found!' });
        }
    }).catch((err) => {
        res.status(500).send();
    });     
};

module.exports = PersonaController;