'use strict';
const Sequelize = require('sequelize');
const  db = require('../database');
const Rol = require('./Rol');

const Persona = db.define('Persona', {
    id_persona: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: Sequelize.STRING,
    apellido: Sequelize.STRING,
    cedula: Sequelize.STRING,
    direccion: Sequelize.STRING,
    telefono: Sequelize.STRING,
    codigoPostal: Sequelize.STRING,
    email: Sequelize.STRING,
    pais: Sequelize.STRING,
    external_id: { type: Sequelize.STRING, defaultValue: Sequelize.UUIDV4 }
}, {
    timestamps: false
});

Persona.belongsTo(Rol, { foreignKey: 'id_rol' });
Persona.sync();

module.exports = Persona;