// Load required packages
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Embebed Models
var Bank = require('./banks').Banks;
var Rate = require('./rates').Rates;
var Service = require('./services').Services;
var Language = require('./languages').Languages;
var Currency = require('./currencies').Currencies;

// Define our Amount schema
var AmountSchema = new Schema({
    rate: [Rate.schema],
    service: [Service.schema],
    income: Number,
    monthlyValue: Number,
    amountMonths: Number,
    bank: [Bank.schema],
    currency: [Currency.schema],
    language: [Language.schema],
    creationDate: Date,
    lastEditionDate: Date,
    enabled: Boolean
},{ versionKey: false });

// Export the Mongoose model
module.exports.Amounts = mongoose.model('Amounts', AmountSchema);