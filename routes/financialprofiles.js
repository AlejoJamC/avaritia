/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

// Load required packages
var logger = require('../config/logger').logger;
var FinancialProfile = require('../models/financialprofiles').FinancialProfiles;

// ENDPOINT: /financial/profiles METHOD: GET
exports.getFinancialProfiles = function(req, res){
    // Assign all filters in a var to search

    // Use the model to find all records filter by isoName
    FinancialProfile.find(function (err, profiles) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // Success
        res.json(profiles);
    });

};

// ENDPOINT: /financial/profiles/:id METHOD: GET
exports.getFinancialProfileById = function(req, res){
    // Use the schema to find single Financial profile
    FinancialProfile.findById(req.params.id, function (err, profile) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json(profile);
    });
};

// ENDPOINT: /financial/profiles METHOD: POST
exports.postFinancialProfile = function (req, res) {
    // Create a new instance of the Financial profile model
    var profile = new FinancialProfile();

    // Set the Financial profile properties that came from the POST data
    profile.name = req.body.name;
    profile.creationDate = Date.now();
    profile.lastEditionDate = Date.now();
    profile.enabled = true;

    profile.save(function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Financial profile created successfully!', data: profile });
    });
};

// ENDPOINT: /financial/profiles/:id METHOD: PUT
exports.putFinancialProfile = function(req, res){
    FinancialProfile.findById(req.params.id, function (err, profile) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        // Set the Financial profile properties that came from the PUT data
        profile.name = req.body.name;
        profile.creationDate = req.body.creationDate;
        profile.lastEditionDate = Date.now();
        profile.enabled = req.body.enabled;

        profile.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // success
            res.json({message: 'Financial profile updated successfully', data: profile });
        });
    });
};


// ENDPOINT: /financial/profiles/:id METHOD: PATCH
exports.patchFinancialProfile = function (req, res) {
    // use the schema to findById
    FinancialProfile.findById(req.params.id, function (err, profile) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        profile.enabled = req.body.enabled;
        profile.lastEditionDate = Date.now();

        profile.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            var message = '';
            if(profile.enabled === true){
                message = 'Financial profile enabled successfully';
            }else{
                message = 'Financial profile disbled successfully';
            }
            // success
            res.json({message: message, data: profile });
        });
    });

};


// ENDPOINT: /financial/profiles/:id METHOD: DELETE
exports.deleteFinancialProfile = function(req, res){
    FinancialProfile.findByIdAndRemove(req.params.id, function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Financial profile deleted successfully!' });
    });
};