// Load required packages
var logger = require('../config/logger').logger;
var Rate = require('../models/rates').Rates;

// ENDPOINT: /rates METHOD: GET
// ENDPOINT: /rates?name=value METHOD: GET
exports.getRates = function(req, res){
    // Assign all filters in a var to search
    var name = req.query.name;

    if(typeof name !== 'undefined'){
        // Use the model to find all records filter by name
        Rate.find({ name : name}, function (err, rateName) {
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // Success
            res.json(rateName);
        });
    }else{
        // Use the model to find all records filter by isoName
        Rate.find(function (err, rates) {
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // Success
            res.json(rates);
        });
    }
};

// ENDPOINT: /rates/:id METHOD: GET
exports.getRateById = function(req, res){
    // Use the schema to find single rate
    Rate.findById(req.params.id, function (err, rate) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json(rate);
    });
};

// ENDPOINT: /rates METHOD: POST
exports.postRate = function (req, res) {
    // Create a new instance of the rate model
    var rate = new Rate();

    // Set the rate properties that came from the POST data
    rate.name = req.body.name;
    rate.creationDate = Date.now();
    rate.lastEditionDate = Date.now();
    rate.enabled = true;

    rate.save(function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Rate created successfully!', data: rate });
    });
};

// ENDPOINT: /rates/:id METHOD: PUT
exports.putRate = function(req, res){
    Rate.findById(req.params.id, function (err, rate) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        // Set the rate properties that came from the PUT data
        rate.name = req.body.name;
        rate.creationDate = req.body.creationDate;
        rate.lastEditionDate = Date.now();
        rate.enabled = req.body.enabled;

        rate.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // success
            res.json({message: 'Rate updated successfully', data: rate });
        });
    });
};


// ENDPOINT: /rates/:id METHOD: PATCH
exports.patchRate = function (req, res) {
    // use the schema to findById
    Rate.findById(req.params.id, function (err, rate) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        rate.enabled = req.body.enabled;
        rate.lastEditionDate = Date.now();

        rate.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            var message = '';
            if(rate.enabled === true){
                message = 'Rate enabled successfully';
            }else{
                message = 'Rate disbled successfully';
            }
            // success
            res.json({message: message, data: rate });
        });
    });

};


// ENDPOINT: /rates/:id METHOD: DELETE
exports.deleteRate = function(req, res){
    Rate.findByIdAndRemove(req.params.id, function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Rate deleted successfully!' });
    });
};