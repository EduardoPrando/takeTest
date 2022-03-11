const express = require('express');

const errorHandler = require('../middleware/errorHandler');
const { responseFromGithub } = require('../middleware');

const app = express();
require('dotenv').config();

const port = process.env.PORT || 3001;

app.get('/', responseFromGithub);

app.use(errorHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
