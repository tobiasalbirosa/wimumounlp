'use strict';
const express = require('express');
const index = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
index.use(bodyParser.urlencoded({ extended: true })); 
index.use(express.static('public'));
module.exports = (() =>{
    index.get('/',(req, res) => {
        res.sendFile(path.join(__dirname,'../public/html','index.html'));
    });
})();
module.exports = index;