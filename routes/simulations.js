/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

// Load required packages
var logger = require('../config/logger').logger;
var Simulation = require('../models/simulations').Simulations;
var Bank = require('../models/banks').Banks;
var Service = require('../models/services').Services;
var Rate = require('../models/rates').Rates;

// ENDPOINT: /simulations METHOD: GET
// ENDPOINT: /simulations?id=value&bank=value METHOD: GET
// TODO: evitar repetir codigo y mejorar el sistema de queries
exports.getSimulations = function(req, res){
    // Assign filter
    var id = req.params.id;
    var bank = req.params.bank;

    if(typeof bank === 'undefined'){
        Simulation.find(function (err, simulations) {
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // success
            res.json(simulations);
        });
    }else{
        Simulation.find({_id: id },function (err, simulations) {
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }

            // TODO: Esta mal almacenado el valor de la tasa y el plazo
            // TODO: modificar el esquema del banco

            // success
            res.json(simulations);
        });
    }
};

// ENDPOINT: /simulations/:id METHOD: GET
exports.getSimulationById = function(req, res){
    // Use the 'Simulation' model to find single Simulation
    Simulation.findById(req.params.id, function (err, simulation) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json(simulation);
    });
};

// ENDPOINT: /simulations METHOD: POST
exports.postSimulation = function (req, res) {
    // Create a new instance of the Simulation model
    var simulation = new Simulation();

    logger.info(req.body.rateId);

    // Set the Simulation properties that came from the POST data
    simulation.rateId = req.body.rateId;
    simulation.rate = req.body.rate;
    simulation.serviceId = req.body.serviceId;
    simulation.fees.income = req.body.fees.income;
    simulation.fees.valueLoan = req.body.fees.valueLoan;
    simulation.fees.amountMonths = req.body.fees.amountMonths;
    simulation.deadlines.income = req.body.deadlines.income;
    simulation.deadlines.valueLoan = req.body.deadlines.valueLoan;
    simulation.deadlines.monthlyValue = req.body.deadlines.monthlyValue;
    simulation.amount.income = req.body.amount.income;
    simulation.amount.monthlyValue = req.body.amount.monthlyValue;
    simulation.amount.amountMonths = req.body.amount.amountMonths;
    simulation.creationDate = Date.now();
    simulation.lastEditionDate = Date.now();
    simulation.enabled = true;

    simulation.save(function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Simulation created successfully!', data: simulation });
    });
};

// ENDPOINT: /simulations/:id METHOD: PUT
exports.putSimulation = function(req, res){
    Simulation.findById(req.params.id, function (err, simulation) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        // Set the Simulation properties that came from the PUT data
        simulation.rateId = req.body.rateId;
        simulation.rate = req.body.rate;
        simulation.serviceId = req.body.serviceId;
        simulation.fees.income = req.body.fees.income;
        simulation.fees.valueLoan = req.body.fees.valueLoan;
        simulation.fees.amountMonths = req.body.fees.amountMonths;
        simulation.deadlines.income = req.body.deadlines.income;
        simulation.deadlines.valueLoan = req.body.deadlines.valueLoan;
        simulation.deadlines.monthlyValue = req.body.deadlines.monthlyValue;
        simulation.amount.income = req.body.amount.income;
        simulation.amount.monthlyValue = req.body.amount.monthlyValue;
        simulation.amount.amountMonths = req.body.amount.amountMonths;
        simulation.creationDate = req.body.creationDate;
        simulation.lastEditionDate = Date.now();
        simulation.enabled = req.body.enabled;

        simulation.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // success
            res.json({message: 'Simulation updated successfully', data: simulation });
        });
    });
};

// ENDPOINT: /simulations/:id METHOD: PATCH
exports.patchSimulation = function(req, res){
    Simulation.findById(req.params.id, function (err, simulation) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        simulation.enabled = req.body.enabled;
        simulation.lastEditionDate = Date.now();

        simulation.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            var message = '';
            if(simulation.enabled === true){
                message = 'Simulation enabled successfully';
            }else{
                message = 'Simulation disbled successfully';
            }
            // success
            res.json({message: message, data: simulation });
        });
    });
};

// ENDPOINT: /simulations/:id METHOD: DELETE
exports.deleteSimulation = function(req, res){
    Simulation.findByIdAndRemove(req.params.id, function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Simulation deleted successfully!' });
    });
};