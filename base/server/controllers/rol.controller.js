'use strict';
const Rol = require('../models/Rol');

const RolController = {};

RolController.getRolList = (req, res) => {
    Rol.findAll().then((rol) =>{
        res.json(rol);
    }).catch((err) => {
        res.status(500).send();
    });
};

RolController.saveRol = (req, res) => {
    Rol.findOne({ where: { name: req.body.name } })
        .then((result) => {
            if(!result){
                Rol.create(req.body).then((rol) => {
                    if(rol){
                        res.json({ msg: 'Rol Saved!' });
                    }else{
                        res.json({ msg: 'The rol has not been saved.' });
                    }
                }).catch((err) => {
                    res.status(500).send();
                });
            }else{
                res.json({ msg: 'The rol entered already exists!' });
            }            
        }).catch((err) => {
            res.status(500).send();
        });        
};

RolController.getRol = (req, res) => {
    Rol.findOne({
        where: { name: req.params.id }
    }).then((rol) => {
        res.json(rol);
    }).catch((err) => {
        res.status(500).send();
    });    
};

module.exports = RolController;
