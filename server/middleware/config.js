'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('../routes/auth');

module.exports = function (app, express) {
  app.use(bodyParser.json());
  app.use(morgan('dev')); 
  app.use(express.static(path.join(__dirname, './../../public')));
  app.use('/bundle', express.static(path.join(__dirname, './../../bundle')));
  app.use('/db', routes);
};


