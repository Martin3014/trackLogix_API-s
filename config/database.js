'use strict';

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: "trackLogixDB",
  username: "postgres",
  password: "admin",
  host: "127.0.0.1",
  dialect: 'postgres',
});

// Export Sequelize
module.exports = sequelize;