'use strict';

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: "trackLogixDB",
  username: "postgres",
  password: "admin",
  host: "127.0.0.1",
  dialect: 'postgres',
});

// Exporta la instancia de Sequelize
module.exports = sequelize;