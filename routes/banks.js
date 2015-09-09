// Load required packages
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Embebed Models
var Country = require('./countries').Countries;

// Define our Bank schema
var BankSchema = new Schema({
    name: String,
    nit: Number,
    score: Number,
    contact: String,
    country: [Country.schema],
    creationDate: Date,
    lastEditionDate: Date,
    enabled: Boolean
},{ versionKey: false });

// Export the Mongoose model
module.exports.Banks = mongoose.model('Banks', BankSchema);