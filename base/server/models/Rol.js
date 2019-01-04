'use strict';
const Sequelize = require('sequelize');
const  db = require('../database');

const Rol = db.define('Rol', {
    id_rol: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: Sequelize.STRING,
    external_id: { type: Sequelize.STRING, defaultValue: Sequelize.UUIDV4 }     
}, {
    timestamps: false
});

Rol.sync();

module.exports = Rol;