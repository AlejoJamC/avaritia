/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

/**
 * Module dependencies
 */
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var jade = require('jade');
var routes = require('./routes/routes');
var Logger = require('./config/logger');
var logger = Logger.logger;

// Choose the environment of work
var environment = 'devLocal';
logger.info('Chose the work environment: ' + environment);
var config = require('./config/environment.json')[environment];
logger.info('API version: ' + config.version);

// Mongoose connection logger
var mongoDB = require('./config/mongodb');
mongoDB.setupMongoDB(config.nosqlDB);

// Create our express application
var app = express();

// Set view engine to jade
app.set('view engine', 'jade');

// Using body-parser in our application
// create application/json parser
app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({
  extended: true
}));

// Use express session support since OAuth2orize requires it
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: '1f u c4n r34d th1s u r34lly n33d t0 g37 l41d'
}));

// Set header 'X-Powered-By'
logger.info('API powered by: @AlejoJamC');
app.use(function (req, res, next) {
  res.set('X-Powered-By', 'Alejandro Mantilla < @AlejoJamC >');
  next();
});

// Use the passport package in our application
app.use(passport.initialize());

// Path to our public directory
app.use(express.static(__dirname + '/public'));

//ROUTER
//Create our Express router
var router  = express.Router();

// Setup all routes on express router
routes.setupRouter(router);

// Use our environment defined port or value on our config file /config/environment.json
var port = process.env.PORT || config.port;

// Register all our routes with a prefix: /api or /v1
// This poject is created to be hosted in a subdomain dedicated to authentication and authorization
// Example of an URL with the prefix: auth.happyauth.com/v0
app.use(config.version, router);

// Start the server
app.listen(port);
logger.info('API running on http://localhost:' + port + config.version + '/');