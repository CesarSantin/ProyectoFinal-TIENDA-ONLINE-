'use strict';
const Sequelize = require('sequelize');
const  db = require('../database');
//const Role = require('./Role');

const Transaccion = db.define('Transaccion', {
    id_transaccion: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    
    fecha: Sequelize.DATEONLY,
    monto: Sequelize.DOUBLE,
 
    external_id: { type: Sequelize.STRING, defaultValue: Sequelize.UUIDV4 }
}, {
    timestamps: false
});


Transaccion.sync();

module.exports = Transaccion;