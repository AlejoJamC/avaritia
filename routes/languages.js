// Load required packages
var logger = require('../config/logger').logger;
var Language = require('../models/languages').Languages;



// ENDPOINT: /languages/:id METHOD: GET
exports.getLanguageById = function(req, res){
    // Use the 'Language' model to find single language
    Language.findById(req.params.id, function (err, lang) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json(lang);
    });
};

// ENDPOINT: /languages METHOD: POST
exports.postLanguage = function (req, res) {
    // Create a new instance of the Language model
    var lang = new Language();

    // Set the language properties that came from the POST data
    lang.name = req.body.name;
    lang.isoName = req.body.isoName;
    lang.creationDate = Date.now();
    lang.lastEditionDate = Date.now();
    lang.enabled = true;

    lang.save(function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Language created successfully!', data: lang });
    });
};

// ENDPOINT: /languages/:id METHOD: PUT
exports.putLanguage = function(req, res){
    Language.findById(req.params.id, function (err, lang) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        // Set the language properties that came from the PUT data
        lang.name = req.body.name;
        lang.isoName = req.body.isoName;
        lang.creationDate = req.body.creationDate;
        lang.lastEditionDate = Date.now();
        lang.enabled = req.body.enabled;

        lang.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            // success
            res.json({message: 'Language updated successfully', data: lang });
        });
    });
};

// ENDPOINT: /languages/:id METHOD: PATCH
exports.patchLanguage = function(req, res){
    Language.findById(req.params.id, function (err, lang) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }

        lang.enabled = req.body.enabled;
        lang.lastEditionDate = Date.now();

        lang.save(function(err){
            // Check for errors and show message
            if(err){
                logger.error(err);
                res.send(err);
            }
            var message = '';
            if(lang.enabled === true){
                message = 'Languages enabled successfully';
            }else{
                message = 'Languages disbled successfully';
            }
            // success
            res.json({message: message, data: lang });
        });
    });
};

// ENDPOINT: /languages/:id METHOD: DELETE
exports.deleteLanguage = function(req, res){
    Language.findByIdAndRemove(req.params.id, function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            res.send(err);
        }
        // success
        res.json({ message: 'Language deleted successfully!' });
    });
};