'use strict';
const Sequelize = require('sequelize');

//database - user - password
const sequelize = new Sequelize('ProyectoFinal', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    operatorsAliases: false
});

sequelize.
    authenticate()
    .then(() => { console.log('DB is connected') })
    .catch((err) => { console.error('Unable to connect to the database:'); });

module.exports = sequelize;