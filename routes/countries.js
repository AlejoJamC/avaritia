// Load required packages
var S = require('string');
var logger = require('../config/logger').logger;
var Countries = require('../models/countries').Countries;

// ENDPOINT: /countries METHOD: GET
// ENDPOINT: /countries?name=value METHOD: GET
// TODO: evitar repetir codigo y mejorar el sistema de queries
exports.getCountries = function(req, res){
    // Assign all filters in a var to search
    var name = req.query.name;

    if(typeof name !== 'undefined'){
        name = name.toLowerCase();
        name = S(name).capitalize().s;
        // Use the model to find all records filter by name
        Countries.find({ name : name}, function (err, coutryName) {
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
        Countries.find(function (err, countries) {
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // Success
            res.json(countries);
        });
    }
};

// ENDPOINT: /countries/:id METHOD: GET
exports.getCountryById = function(req, res){
    // Use the schema to find single country
    Countries.findById(req.params.id, function (err, country) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json(country);
    });
};

// ENDPOINT: /countries METHOD: POST
exports.postCountry = function (req, res) {
    // Create a new instance of the country model
    var country = new Countries();

    // Set the country properties that came from the POST data
    country.name = req.body.name;
    country.creationDate = Date.now();
    country.lastEditionDate = Date.now();
    country.enabled = true;

    country.save(function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Country created successfully!', data: country });
    });
};

// ENDPOINT: /countries/:id METHOD: PUT
exports.putCountry = function(req, res){
    Countries.findById(req.params.id, function (err, country) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        // Set the country properties that came from the PUT data
        country.name = req.body.name;
        country.creationDate = req.body.creationDate;
        country.lastEditionDate = Date.now();
        country.enabled = req.body.enabled;

        country.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // success
            res.json({message: 'Country updated successfully', data: country });
        });
    });
};


// ENDPOINT: /countries/:id METHOD: PATCH
exports.patchCountry = function (req, res) {
    // use the schema to findById
    Countries.findById(req.params.id, function (err, country) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        country.enabled = req.body.enabled;
        country.lastEditionDate = Date.now();

        country.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            var message = '';
            if(country.enabled === true){
                message = 'Country enabled successfully';
            }else{
                message = 'Country disbled successfully';
            }
            // success
            res.json({message: message, data: country });
        });
    });

};


// ENDPOINT: /countries/:id METHOD: DELETE
exports.deleteCountry = function(req, res){
    Countries.findByIdAndRemove(req.params.id, function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Country deleted successfully!' });
    });
};