/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

// Load required packages
var logger = require('../config/logger').logger;
var Fee = require('../models/fees').Fees;

// ENDPOINT: /cuentries METHOD: GET
exports.getFees = function(req, res){
    // Assign all filters in a var to search

    // Use the model to find all records filter by isoName
    Fee.find(function (err, fees) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // Success
        res.json(fees);
    });

};

// ENDPOINT: /fees/:id METHOD: GET
exports.getFeeById = function(req, res){
    // Use the schema to find single fee
    Fee.findById(req.params.id, function (err, fee) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json(fee);
    });
};

// ENDPOINT: /fees METHOD: POST
exports.postFee = function (req, res) {
    // Create a new instance of the fee model
    var fee = new Fee();

    // Set the fee properties that came from the POST data
    fee.name = req.body.name;
    fee.creationDate = Date.now();
    fee.lastEditionDate = Date.now();
    fee.enabled = true;

    fee.save(function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Fee created successfully!', data: fee });
    });
};

// ENDPOINT: /fees/:id METHOD: PUT
exports.putFee = function(req, res){
    Fee.findById(req.params.id, function (err, fee) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        // Set the fee properties that came from the PUT data
        fee.name = req.body.name;
        fee.creationDate = req.body.creationDate;
        fee.lastEditionDate = Date.now();
        fee.enabled = req.body.enabled;

        fee.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // success
            res.json({message: 'Fee updated successfully', data: fee });
        });
    });
};


// ENDPOINT: /fees/:id METHOD: PATCH
exports.patchFee = function (req, res) {
    // use the schema to findById
    Fee.findById(req.params.id, function (err, fee) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        fee.enabled = req.body.enabled;
        fee.lastEditionDate = Date.now();

        fee.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            var message = '';
            if(fee.enabled === true){
                message = 'Fee enabled successfully';
            }else{
                message = 'Fee disbled successfully';
            }
            // success
            res.json({message: message, data: fee });
        });
    });

};


// ENDPOINT: /fees/:id METHOD: DELETE
exports.deleteFee = function(req, res){
    Fee.findByIdAndRemove(req.params.id, function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Fee deleted successfully!' });
    });
};