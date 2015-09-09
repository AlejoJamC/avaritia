// Load required packages
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define our Country schema
var CountrySchema = new Schema({
    name: String,
    creationDate: Date,
    lastEditionDate: Date,
    enabled: Boolean
},{ versionKey: false });

// Export the Mongoose model
module.exports.Countries = mongoose.model('Countries', CountrySchema);