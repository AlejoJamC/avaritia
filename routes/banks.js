// Load required packages
var logger = require('../config/logger').logger;
var Bank = require('../models/banks').Banks;

// TODO: agregar la ruta que actualice la calificacion

// ENDPOINT: /banks METHOD: GET
// ENDPOINT: /banks?name=value METHOD: GET
exports.getBanks = function(req, res){
    // Assign all filters in a var to search
    // TODO: ordenar los bancos por calificacion del usuarios
    var name = req.query.name;
    var score = req.query.score;

    if(typeof name !== 'undefined'){
        // Use the model to find all records filter by name
        Bank.find({ name : name}, function (err, bankName) {
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // Success
            res.json(bankName);
        });
    }else{
        // Use the model to find all records filter by isoName
        Bank.find(function (err, banks) {
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // Success
            res.json(banks);
        });
    }
};

// ENDPOINT: /banks/:id METHOD: GET
exports.getBankById = function(req, res){
    // Use the schema to find single country
    Bank.findById(req.params.id, function (err, bank) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json(bank);
    });
};

// ENDPOINT: /banks METHOD: POST
exports.postBank = function (req, res) {
    // Create a new instance of the country model
    var bank = new Bank();

    // Set the country properties that came from the POST data
    bank.name = req.body.name;
    bank.creationDate = Date.now();
    bank.lastEditionDate = Date.now();
    bank.enabled = true;

    bank.save(function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Bank created successfully!', data: bank });
    });
};

// ENDPOINT: /banks/:id METHOD: PUT
exports.putBank = function(req, res){
    Bank.findById(req.params.id, function (err, bank) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        // Set the country properties that came from the PUT data
        bank.name = req.body.name;
        bank.creationDate = req.body.creationDate;
        bank.lastEditionDate = Date.now();
        bank.enabled = req.body.enabled;

        bank.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // success
            res.json({message: 'Bank updated successfully', data: bank });
        });
    });
};


// ENDPOINT: /banks/:id METHOD: PATCH
exports.patchBank = function (req, res) {
    // use the schema to findById
    Bank.findById(req.params.id, function (err, bank) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        bank.enabled = req.body.enabled;
        bank.lastEditionDate = Date.now();

        bank.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            var message = '';
            if(bank.enabled === true){
                message = 'Bank enabled successfully';
            }else{
                message = 'Bank disbled successfully';
            }
            // success
            res.json({message: message, data: bank });
        });
    });

};


// ENDPOINT: /banks/:id METHOD: DELETE
exports.deleteBank = function(req, res){
    Bank.findByIdAndRemove(req.params.id, function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Bank deleted successfully!' });
    });
};