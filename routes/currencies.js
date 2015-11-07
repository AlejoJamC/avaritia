// Load required packages
var S = require('string');
var logger = require('../config/logger').logger;
var Currency = require('../models/currencies').Currencies;

// Embebed model
var Country = require('../models/countries').Countries;

// ENDPOINT: /currencies METHOD: GET
// ENDPOINT: /currencies?name=value METHOD: GET
// TODO: evitar repetir codigo y mejorar el sistema de queries
exports.getCurrencies = function(req, res){
    // Assign all filters in a var to search
    var name = req.query.name;

    if(typeof name !== 'undefined'){
        name = name.toLowerCase();
        name = S(name).capitalize.s;
        // Use the model to find all records filter by name
        Currency.find({ name : name}, function (err, coutryName) {
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // Success
            res.json(coutryName);
        });
    }else{
        // Use the model to find all records filter by isoName
        Currency.find(function (err, currencies) {
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // Success
            res.json(currencies);
        });
    }
};

// ENDPOINT: /currencies/:id METHOD: GET
exports.getCurrencyById = function(req, res){
    // Use the schema to find single currency
    Currency.findById(req.params.id, function (err, currency) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json(currency);
    });
};

// ENDPOINT: /currencies METHOD: POST
exports.postCurrency = function (req, res) {
    // Create a new instance of the currency model
    var currency = new Currency();

    // Set the country properties that came from the POST data
    currency.name = req.body.name;
    currency.symbol = req.body.symbol;
    currency.creationDate = Date.now();
    currency.lastEditionDate = Date.now();
    currency.enabled = true;

    // Set the embebed document
    var country = new Country();
    country._id = req.body.country._id;
    country.name = req.body.country.name;
    currency.country.push(country);

    currency.save(function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Currency created successfully!', data: currency });
    });
};

// ENDPOINT: /currencies/:id METHOD: PUT
exports.putCurrency = function(req, res){
    // TODO: evitar procedimiento async en la actualizacion de esta entidad
    Currency.findById(req.params.id, function (err, currency) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        // Delete the curreent country
        currency.update({
            $set:{
                country:[]
            }
        }, function (err, affected) {
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            logger.info('Deleted country field');
        });

        // Set the country properties that came from the PUT data
        currency.name = req.body.name;
        currency.symbol = req.body.symbol;
        currency.creationDate = req.body.creationDate;
        currency.lastEditionDate = Date.now();
        currency.enabled = req.body.enabled;

        // Set the embebed document
        var country = new Country();
        country._id = req.body.country._id;
        country.name = req.body.country.name;
        currency.country.push(country);

        currency.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // success
            res.json({message: 'Country updated successfully', data: currency });
        });
    });
};


// ENDPOINT: /currencies/:id METHOD: PATCH
exports.patchCurrency = function (req, res) {
    // use the schema to findById
    Currency.findById(req.params.id, function (err, currency) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        currency.enabled = req.body.enabled;
        currency.lastEditionDate = Date.now();

        currency.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            var message = '';
            if(currency.enabled === true){
                message = 'Currency enabled successfully';
            }else{
                message = 'Currency disbled successfully';
            }
            // success
            res.json({message: message, data: currency });
        });
    });

};

// ENDPOINT: /currencies/:id METHOD: DELETE
exports.deleteCurrency = function(req, res){
    Currency.findByIdAndRemove(req.params.id, function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Currency deleted successfully!' });
    });
};