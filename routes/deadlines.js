/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

// Load required packages
var logger = require('../config/logger').logger;
var Deadline = require('../models/deadlines').Deadlines;

// ENDPOINT: /deadlines METHOD: GET
exports.getDeadlines = function(req, res){
    // Assign all filters in a var to search

    // Use the model to find all records filter by isoName
    Deadline.find(function (err, deadlines) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // Success
        res.json(deadlines);
    });

};

// ENDPOINT: /deadlines/:id METHOD: GET
exports.getDeadlineById = function(req, res){
    // Use the schema to find single Deadline
    Deadline.findById(req.params.id, function (err, deadline) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json(deadline);
    });
};

// ENDPOINT: /deadlines METHOD: POST
exports.postDeadline = function (req, res) {
    // Create a new instance of the Deadline model
    var deadline = new Deadline();

    // Set the Deadline properties that came from the POST data
    deadline.name = req.body.name;
    deadline.creationDate = Date.now();
    deadline.lastEditionDate = Date.now();
    deadline.enabled = true;

    deadline.save(function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Deadline created successfully!', data: deadline });
    });
};

// ENDPOINT: /deadlines/:id METHOD: PUT
exports.putDeadline = function(req, res){
    Deadline.findById(req.params.id, function (err, deadline) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        // Set the Deadline properties that came from the PUT data
        deadline.name = req.body.name;
        deadline.creationDate = req.body.creationDate;
        deadline.lastEditionDate = Date.now();
        deadline.enabled = req.body.enabled;

        deadline.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // success
            res.json({message: 'Deadline updated successfully', data: deadline });
        });
    });
};


// ENDPOINT: /deadlines/:id METHOD: PATCH
exports.patchDeadline = function (req, res) {
    // use the schema to findById
    Deadline.findById(req.params.id, function (err, deadline) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        deadline.enabled = req.body.enabled;
        deadline.lastEditionDate = Date.now();

        deadline.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            var message = '';
            if(deadline.enabled === true){
                message = 'Deadline enabled successfully';
            }else{
                message = 'Deadline disbled successfully';
            }
            // success
            res.json({message: message, data: deadline });
        });
    });

};


// ENDPOINT: /deadlines/:id METHOD: DELETE
exports.deleteDeadline = function(req, res){
    Deadline.findByIdAndRemove(req.params.id, function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Deadline deleted successfully!' });
    });
};