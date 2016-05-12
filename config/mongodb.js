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
var logger = require('../config/logger').logger;

/**
 * setupMongoDB
 *
 * @description Configures and initiates the connection with the NoSQL MongoDB database
 *
 * @param {string}      DBName      Name of the database to connect
 */
function setupMongoDB (DBName){
    /**
     *  required packages
     */
    var mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost:27017/' + DBName);
    logger.info('Connecting to MongoDB server, database: ' + DBName);

    var con = mongoose.connection;
    // logger conexión con la base de datos
    con.once('open', function () {
        logger.info('Connected to MongoDB successfully!');
    });

}

// Export the function that initialize all routes
module.exports.setupMongoDB = setupMongoDB;