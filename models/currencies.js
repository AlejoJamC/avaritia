// Load required packages
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Embebed Models
var Country = require('./countries').Countries;

// Define our Currency schema
var CurrencySchema = new Schema({
    name: String,
    symbol: String,
    country: [Country.schema],
    creationDate: Date,
    lastEditionDate: Date,
    enabled: Boolean
},{ versionKey: false });

// Export the Mongoose model
module.exports.Currencies = mongoose.model('Currencies', CurrencySchema);
