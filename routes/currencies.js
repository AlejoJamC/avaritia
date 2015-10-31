// Load required packages
var logger = require('../config/logger').logger;
var Currencies = require('../models/currencies').Currencies;

// Embebed model
var Countries = require('../models/countries').Countries;

// ENDPOINT: /cuentries METHOD: GET
// ENDPOINT: /cuentries?name=value METHOD: GET
exports.getCurrencies = function(req, res){
    // Assign all filters in a var to search
    var name = req.query.name;

    if(typeof name !== 'undefined'){
        // Use the model to find all records filter by name
        Currencies.find({ name : name}, function (err, coutryName) {
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
        Currencies.find(function (err, countries) {
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
exports.getCurrencyById = function(req, res){
    // Use the schema to find single country
    Currencies.findById(req.params.id, function (err, country) {
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
exports.postCurrency = function (req, res) {
    // Create a new instance of the country model
    var country = new Currencies();

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
exports.putCurrency = function(req, res){
    Currencies.findById(req.params.id, function (err, country) {
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
exports.patchCurrency = function (req, res) {
    // use the schema to findById
    Currencies.findById(req.params.id, function (err, country) {
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

// ENDPOINT: /currencies/:id METHOD: DELETE
exports.deleteCurrency = function(req, res){
    Currencies.findByIdAndRemove(req.params.id, function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Currency deleted successfully!' });
    });
};