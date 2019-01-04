'use strict';
const Sequelize = require('sequelize');
const  db = require('../database');
//const Role = require('./Role');

const Categorias = db.define('Categorias', {
    id_categorias: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    
    nombre: Sequelize.STRING,
   
 
    external_id: { type: Sequelize.STRING, defaultValue: Sequelize.UUIDV4 }
}, {
    timestamps: false
});


Categorias.sync();

module.exports = Categorias;