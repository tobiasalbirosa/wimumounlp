'use strict';
const express = require('express');
const app = express();
const controller = require('./controller');
const port = process.env.PORT || 5000;
app.use(controller);
app.listen(port);