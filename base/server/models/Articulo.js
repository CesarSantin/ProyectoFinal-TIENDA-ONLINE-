'use strict';
const Sequelize = require('sequelize');
const  db = require('../database');
const Persona = require('./Persona');
const Pedido = require('./Pedido');

const Articulo = db.define('Articulo', {
    id_articulo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nonbre: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    imagen: Sequelize.STRING,
    precio: Sequelize.DOUBLE,
    fechaPublicacion: Sequelize.DATEONLY,
    direccionArticulo: Sequelize.STRING,
    cantidad: Sequelize.STRING,
    external_id: { type: Sequelize.STRING, defaultValue: Sequelize.UUIDV4 }
}, {
    timestamps: false
});

Articulo.belongsTo(Pedido, { foreignKey: 'id_pedido' });
Articulo.belongsTo(Persona, { foreignKey: 'id_persona' });
Articulo.sync();

module.exports = Articulo;