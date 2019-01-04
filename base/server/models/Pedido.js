'use strict';
const Sequelize = require('sequelize');
const  db = require('../database');
const Persona = require('./Persona');

const Pedido = db.define('Pedido', {
    id_pedido: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nonbre: Sequelize.STRING,
    fechaPedido: Sequelize.DATEONLY,
    estado: Sequelize.STRING,
 
    external_id: { type: Sequelize.STRING, defaultValue: Sequelize.UUIDV4 }
}, {
    timestamps: false
});

Pedido.belongsTo(Persona, { foreignKey: 'id_persona' });
Pedido.sync();

module.exports = Pedido;