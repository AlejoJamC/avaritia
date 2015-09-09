// Load required packages
var mongoose = require('mongoose');
// TODO: encriptar value que es el codigo de autorizacion
// Define our token schema
var CodeSchema   = new mongoose.Schema({
    value: {
        type: String,
        required: true
    },
    redirectUri: {
        type: String,
        required: true
    },
    idUser: {
        type: String,
        required: true
    },
    idClient: {
        type: String,
        required: true
    }
},{ versionKey: false });

// Export the Mongoose model
module.exports.Code = mongoose.model('Code', CodeSchema);