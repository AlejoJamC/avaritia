// Load required packages
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Embebed Models
var Language = require('./languages').Languages;

// Define our Rates schema
var RateSchema = new Schema({
    name: String,
    description: String,
    language: [Language.schema],
    creationDate: Date,
    lastEditionDate: Date,
    enabled: Boolean
},{ versionKey: false });

// Export the Mongoose model
module.exports.Rates = mongoose.model('Rates', RateSchema);