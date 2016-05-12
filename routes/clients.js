/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

// Load required packages
var Logger = require('../config/logger');
var logger = Logger.logger;
var DataModel = require('../models/clients');
var Client = DataModel.Client;
// TODO: implementar mas verbos y funciones para administrar los clientes
// ENDPOINT: /clients METHOD: GET
exports.getClientByIdClient = function(req, res){
    // Use the 'Client' model to find the client by his id [idUser]
    Client.find({ idUser : req.user._id },function(err, client){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json(client);
    });
};

// ENDPOINT: /clients METHOD: POST
exports.postClient = function (req, res) {
    // Create a new instance of the Client model
    var client = new Client();

    // Set the Client properties that came from the POST data
    client.name = req.body.name;
    client.id = req.body.id;
    client.secret = req.body.secret;
    client.idUser = req.user._id;

    client.save(function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Client created successfully!', data: client });
    });
};

// ENDPOINT: /clients/:id METHOD: DELETE
exports.deleteClient = function(req, res){
    Client.findByIdAndRemove(req.params.id, function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Client deleted successfully!' });
    });
};