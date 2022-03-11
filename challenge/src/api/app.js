const express = require('express');

const errorHandler = require('../middleware/errorHandler');
const { responseFromGithub } = require('../middleware');

const app = express();

app.get('/', responseFromGithub);

app.use(errorHandler);

module.exports = app;
