var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var movies = require('./routes/movies');
var app = express();

// connect to our database
// Ideally, you will obtain DB details from a config file
var dbName = 'movieDB';
var connectString = 'mongodb://localhost:27107' + dbName;

mongoose.connect(connectionString);