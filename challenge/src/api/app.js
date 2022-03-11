const express = require('express');

const errorHandler = require('../middleware/errorHandler');
const { responseFromGithub } = require('../middleware');

const app = express();

// const port = process.env.PORT || 3001;

app.get('/', responseFromGithub);

app.use(errorHandler);

module.exports = app;
