require('module-alias/register');

var express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json'); 
const route = require('@src/routes');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

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
