// In src/v1/swagger.js
const path = require('path');  // Added to handle paths appropriately
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Relative paths from the project's base folder
const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'Crossfit WOD API', version: '1.0.0' },
  },
  apis: [
    path.resolve(__dirname, '../routes/customer_routes.js'),  // Adjusted path
    path.resolve(__dirname, '../models/customers.js'),        // Adjusted path
  ],
};

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

// Function to set up our docs
const swaggerDocs = (app, port) => {
  // Route-Handler to visit our docs
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Make our docs in JSON format available
  app.get('/api/v1/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  console.log(`Version 1 Docs are available on http://localhost:${port}/api/`);
};

module.exports = { swaggerDocs };
