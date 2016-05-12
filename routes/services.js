/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

// Load required packages
var logger = require('../config/logger').logger;
var Services = require('../models/services').Services;
var Language = require('../models/languages').Languages;

// ENDPOINT: /services METHOD: GET
// ENDPOINT: /services?name=value METHOD: GET
exports.getServices = function(req, res){
    // Assign all filters in a var to search
    var name = req.query.name;

    if( (typeof name === 'undefined') ){
        // Use the 'Service' model to find all Service
        Services.find(function (err, services) {
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // success
            res.json(services);
        });
    }else{
        // Use the 'Service' model to find all records filter by isoName
        Services.find({ 'name' : name}, function (err, name) {
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // Success
            res.json(name);
        });
    }
};

// ENDPOINT: /services/:id METHOD: GET
exports.getServiceById = function(req, res){
    // Use the 'Service' model to find single Service
    Services.findById(req.params.id, function (err, service) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json(service);
    });
};

// ENDPOINT: /services METHOD: POST
exports.postService = function (req, res) {
    // Create a new instance of the Service model
    var service = new Services();


    // Set the Service properties that came from the POST data
    service.name = req.body.name;
    service.description = req.body.description;
    service.creationDate = Date.now();
    service.lastEditionDate = Date.now();
    service.enabled = true;

    // Add embeded document
    var lang = new Language();
    lang._id = req.body.language._id;
    lang.name = req.body.language.name;
    lang.isoName = req.body.language.isoName;
    service.lang.push(lang);

    service.save(function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Service created successfully!', data: service });
    });
};

// ENDPOINT: /services/:id METHOD: PUT
exports.putService = function(req, res){
    Services.findById(req.params.id, function (err, service) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        // Delete all the items of the questionnaire
        service.update({ $set: { lang: [] }}, function(err, affected){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // Deleted all items
            logger.info('Delete all languages to insert modified');
        });

        // Set the Service properties that came from the PUT data
        service.name = req.body.name;
        service.description = req.body.description;

        service.creationDate = req.body.creationDate;
        service.lastEditionDate = Date.now();
        service.enabled = req.body.enabled;

        var lang = new Language();
        lang._id = req.body.language._id;
        lang.name = req.body.language.name;
        lang.isoName = req.body.language.isoName;
        service.lang.push(lang);

        service.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // success
            res.json({message: 'Service updated successfully', data: service });
        });
    });
};

// ENDPOINT: /services/:id METHOD: PATCH
exports.patchService = function(req, res){
    Services.findById(req.params.id, function (err, service) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        service.enabled = req.body.enabled;
        service.lastEditionDate = Date.now();

        service.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            var message = '';
            if(service.enabled === true){
                message = 'Service enabled successfully';
            }else{
                message = 'Service disbled successfully';
            }
            // success
            res.json({message: message, data: service });
        });
    });
};

// ENDPOINT: /services/:id METHOD: DELETE
exports.deleteService = function(req, res){
    Services.findByIdAndRemove(req.params.id, function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Service deleted successfully!' });
    });
};