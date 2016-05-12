/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

// Load required packages
var logger = require('../config/logger').logger;
var BRS = require('../models/bankRateService').BankRateService;

// ENDPOINT: /brs METHOD: GET
exports.getBRS = function(req, res){
    // Use the model to find all records filter by isoName
    BRS.find(function (err, brs) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // Success
        res.json(brs);
    });
};

// ENDPOINT: /brs/:id METHOD: GET
exports.getBRSById = function(req, res){
    // Use the schema to find single BRS
    BRS.findById(req.params.id, function (err, brs) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json(brs);
    });
};

// ENDPOINT: /brs METHOD: POST
exports.postBRS = function (req, res) {
    // Create a new instance of the BRS model
    var brs = new BRS();

    // Set the BRS properties that came from the POST data
    brs.rateId = req.body.rateId;
    brs.rate = req.body.rate;
    brs.rateValue = req.body.rateValue;
    brs.serviceId = req.body.serviceId;
    brs.service = req.body.service;
    brs.bankId = req.body.bankId;
    brs.bank = req.body.bank;
    brs.creationDate = Date.now();
    brs.lastEditionDate = Date.now();
    brs.enabled = true;

    brs.save(function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Intermediate created successfully!', data: brs });
    });
};

// ENDPOINT: /brs/:id METHOD: PUT
exports.putBRS = function(req, res){
    BRS.findById(req.params.id, function (err, brs) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        // Set the BRS properties that came from the PUT data
        brs.name = req.body.name;
        brs.creationDate = req.body.creationDate;
        brs.lastEditionDate = Date.now();
        brs.enabled = req.body.enabled;

        brs.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // success
            res.json({message: 'Intermediate updated successfully', data: brs });
        });
    });
};


// ENDPOINT: /brs/:id METHOD: PATCH
exports.patchBRS = function (req, res) {
    // use the schema to findById
    BRS.findById(req.params.id, function (err, brs) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        brs.enabled = req.body.enabled;
        brs.lastEditionDate = Date.now();

        brs.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            var message = '';
            if(brs.enabled === true){
                message = 'Intermediate enabled successfully';
            }else{
                message = 'Intermediate disbled successfully';
            }
            // success
            res.json({message: message, data: brs });
        });
    });

};


// ENDPOINT: /brs/:id METHOD: DELETE
exports.deleteBRS = function(req, res){
    BRS.findByIdAndRemove(req.params.id, function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Intermediate deleted successfully!' });
    });
};
