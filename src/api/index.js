const express = require('express');
const { responseFromGithub } = require('../middleware');

const app = express();
require('dotenv').config();

const port = process.env.PORT || 3001;

app.get('/', responseFromGithub);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
