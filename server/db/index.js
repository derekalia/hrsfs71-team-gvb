'use strict';

var mongoose = require('mongoose');
var User = require('./schemas/users.js');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.on('error', function(err) {
  console.error('There was an error connecting to mongoDB: ', err);
});

db.once('open', function() {
  console.log('Connection to mongoDB was successful!');
});

module.exports = db;
