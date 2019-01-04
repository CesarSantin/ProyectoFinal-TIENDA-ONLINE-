const Sequelize = require('sequelize');
const  db = require('../database');
const Persona = require('./Persona');

const Cuenta = db.define('Cuenta', {
    id_cuenta: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    correo: Sequelize.STRING,
    clave: Sequelize.STRING,
    external_id: { type: Sequelize.STRING, defaultValue: Sequelize.UUIDV4 }     
});

Cuenta.belongsTo(Persona, { foreignKey: 'id_persona' })
Cuenta.sync();

module.exports = Cuenta;