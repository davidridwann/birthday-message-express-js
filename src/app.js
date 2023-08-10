require('module-alias/register');

var express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json'); 
var cors = require('cors');

const route = require('@src/routes');

var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Swagger API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Route
app.use('/', route);

// set header
app.use((req, res) => {
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header('Content-Type', 'application/json');
  res.send();
});

module.exports = app;
