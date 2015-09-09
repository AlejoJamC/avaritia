// Load required packages
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define our Language schema
var LanguageSchema = new Schema({
    name: String,
    isoName: String,
    creationDate: Date,
    lastEditionDate: Date,
    enabled: Boolean
},{ versionKey: false });

// Export the Mongoose model
module.exports.Languages = mongoose.model('Languages', LanguageSchema);