const express = require('express');

const errorHandler = require('../middleware/errorHandler');
const { filteredDataFromResponse } = require('../middleware/filteredDataFromResponse');

const app = express();

app.get('/', filteredDataFromResponse);

app.use(errorHandler);

module.exports = app;
