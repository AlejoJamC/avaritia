/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

// Load required packages
var logger = require('../config/logger').logger;
var User = require('../models/users').User;

// ENDPOINT: /users METHOD: GET
exports.getUsers = function(req, res){
    // Use the 'User' model to find all users
    User.find(function (err, users) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
            return;
        }
        // success
        res.json(users);
    });
};

// ENDPOINT: /users/:id METHOD: GET
exports.getUserById = function(req, res){
    // Use the 'User' model to find all users
    User.findById(req.params.id, function (err, user) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
            return;
        }
        // success
        res.json(user);
    });
};

// ENDPOINT: /login METHOD: GET
exports.getLogin = function (req, res) {
    // Use the 'User' model to find all users
    User.findById(req.user._id, function (err, user) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
            return;
        }
        // success
        res.json({ message:"Login authenticated successfully", data: user });
    });
};


// ENDPOINT: /users METHOD: POST
exports.postUser = function (req, res) {
    // Create a new instance of the User model
    var user = new User();

    // Set the User properties that came from the POST data
    user.name = req.body.name;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.enabled = true;

    user.save(function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
            return;
        }
        //Success
        res.json({ message: 'User created successfully!', data: user });
    });
};

// ENDPOINT: /users/:id METHOD: PUT
exports.putUser = function(req, res){
    User.findById(req.params.id, function (err, user) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
            return;
        }

        // Set the User properties that came from the PUT data
        user.name = req.body.name;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.password = req.body.password;
        user.enabled = req.body.enabled;
        user.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // success
            res.json({message: 'User updated successfully', data: user });
        });
    });
};

// ENDPOINT: /users/:id METHOD: PATCH
exports.patchUser = function(req, res){
    User.findById(req.params.id, function (err, user) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
            return;
        }

        user.enabled = req.body.enabled;

        user.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
                return;
            }
            var message = '';
            if(user.enabled === true){
                message = 'User enabled successfully';
            }else{
                message = 'User disbled successfully';
            }
            // success
            res.json({message: message, data: user });
        });
    });
};

// ENDPOINT: /users/:id METHOD: DELETE
exports.deleteUser = function(req, res){
    User.findByIdAndRemove(req.params.id, function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
            return;
        }
        // success
        res.json({ message: 'User deleted successfully!' });
    });
};