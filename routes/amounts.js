// Load required packages
var logger = require('../config/logger').logger;
var Amounts = require('../models/amounts').Amounts;

// ENDPOINT: /amounts METHOD: GET
exports.getAmounts = function(req, res){
    // Assign all filters in a var to search
    // TODO: finalizar los filtros de busqueda de las cantidades por banco, tasa, servicio, moneda, idioma
    var bank = req.query.bank;
    var rate = req.query.rate;
    var service = req.query.service;
    var currency = req.query.currency;
    var language = req.query.language;

    // Use the model to find all records filter by isoName
    Amounts.find(function (err, amounts) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // Success
        res.json(amounts);
    });
};

// ENDPOINT: /amounts/:id METHOD: GET
exports.getAmountById = function(req, res){
    // Use the schema to find single country
    Amounts.findById(req.params.id, function (err, amount) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json(amount);
    });
};

// ENDPOINT: /countries METHOD: POST
exports.postAmount = function (req, res) {
    // Create a new instance of the country model
    var amount = new Amounts();

    // Set the country properties that came from the POST data
    amount.name = req.body.name;
    amount.creationDate = Date.now();
    amount.lastEditionDate = Date.now();
    amount.enabled = true;

    amount.save(function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Amount created successfully!', data: amount });
    });
};

// ENDPOINT: /countries/:id METHOD: PUT
exports.putAmount = function(req, res){
    Amounts.findById(req.params.id, function (err, amount) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        // Set the country properties that came from the PUT data
        amount.name = req.body.name;
        amount.creationDate = req.body.creationDate;
        amount.lastEditionDate = Date.now();
        amount.enabled = req.body.enabled;

        amount.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // success
            res.json({message: 'Amount updated successfully', data: amount });
        });
    });
};


// ENDPOINT: /amounts/:id METHOD: PATCH
exports.patchAmount = function (req, res) {
    // use the schema to findById
    Amounts.findById(req.params.id, function (err, amount) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        amount.enabled = req.body.enabled;
        amount.lastEditionDate = Date.now();

        amount.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            var message = '';
            if(amount.enabled === true){
                message = 'Amount enabled successfully';
            }else{
                message = 'Amount disbled successfully';
            }
            // success
            res.json({message: message, data: amount });
        });
    });

};


// ENDPOINT: /amounts/:id METHOD: DELETE
exports.deleteAmount = function(req, res){
    Amounts.findByIdAndRemove(req.params.id, function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Amount deleted successfully!' });
    });
};