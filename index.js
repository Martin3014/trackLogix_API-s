'use strict' 

require('dotenv').config()
const app = require('./config/app');
const sequelize = require('./config/db')

// Funcion de conexion
sequelize.authenticate()
  .then(() => {
    console.log('Connected to DB');
    app.initServer();
  })
  .catch((error) => {
    console.error('Cannot connect to DB:', error);
    process.exit(1);
  });