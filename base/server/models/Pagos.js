'use strict';
const Sequelize = require('sequelize');
const  db = require('../database');
//const Role = require('./Role');

const Pagos = db.define('Pagos', {
    id_pagos: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    
    fechaPago: Sequelize.DATEONLY,
    montoPago: Sequelize.DOUBLE,
    tipoPago: Sequelize.STRING,
    estado: Sequelize.STRING,
 
    external_id: { type: Sequelize.STRING, defaultValue: Sequelize.UUIDV4 }
}, {
    timestamps: false
});


Pagos.sync();

module.exports = Pagos;