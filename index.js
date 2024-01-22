'use strict' 

require('dotenv').config()
const app = require('./config/app');
const sequelize = require('./config/database')

// Funcion de conexion
sequelize.authenticate()
  .then(() => {
    console.log('Connected to DataBase');
    app.initServer();
  })
  .catch((error) => {
    console.error('Cannot connect to DataBase:', error);
    process.exit(1);
  });