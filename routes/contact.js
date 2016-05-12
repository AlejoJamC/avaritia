/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

// Load required packages
var logger = require('../config/logger').logger;
var Contact = require('../models/contacts').Contacts;

// ENDPOINT: /contacts METHOD: GET
// TODO: evitar repetir codigo y mejorar el sistema de queries
exports.getContacts = function(req, res){
    // Use the 'contact' model to find all contacts
    Contact.find(function (err, contacts) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json(contacts);
    });
};

// ENDPOINT: /contacts/:id METHOD: GET
exports.getContactById = function(req, res){
    // Use the 'contact' model to find single contact
    Contact.findById(req.params.id, function (err, contact) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json(contact);
    });
};

// ENDPOINT: /contacts METHOD: POST
exports.postContact = function (req, res) {
    // Create a new instance of the Language model
    var contact = new Contact();

    // Set the language properties that came from the POST data
    contact.name = req.body.name;
    contact.lastname = req.body.lastname;
    contact.email = req.body.email;
    contact.message = req.body.message;
    contact.creationDate = Date.now();
    contact.lastEditionDate = Date.now();
    contact.enabled = true;

    contact.save(function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Contact created successfully!', data: contact });
    });
};

// ENDPOINT: /contacts/:id METHOD: PUT
exports.putContact = function(req, res){
    Contact.findById(req.params.id, function (err, contact) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        // Set the language properties that came from the PUT data
        contact.name = req.body.name;
        contact.lastname = req.body.lastname;
        contact.email = req.body.email;
        contact.message = req.body.message;
        contact.creationDate = req.body.creationDate;
        contact.lastEditionDate = Date.now();
        contact.enabled = req.body.enabled;

        contact.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // success
            res.json({message: 'Contact updated successfully', data: contact });
        });
    });
};

// ENDPOINT: /contacts/:id METHOD: PATCH
exports.patchContact = function(req, res){
    Contact.findById(req.params.id, function (err, contact) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        contact.enabled = req.body.enabled;
        contact.lastEditionDate = Date.now();

        contact.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            var message = '';
            if(contact.enabled === true){
                message = 'Contact enabled successfully';
            }else{
                message = 'Contact disbled successfully';
            }
            // success
            res.json({message: message, data: contact });
        });
    });
};

// ENDPOINT: /contacts/:id METHOD: DELETE
exports.deleteContact = function(req, res){
    Contact.findByIdAndRemove(req.params.id, function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Contact deleted successfully!' });
    });
};