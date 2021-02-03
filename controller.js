'use strict';
const express = require('express');
const controller = express.Router();
const index = require('./routes/index');
module.exports = (() =>{ 
    controller.use('/',(req,res,next) => {
        controller.use(index);
        next();
    });
})();
module.exports = controller;