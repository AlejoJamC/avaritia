// Load required packages
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Embebed Models
var Bank = require('./banks').Banks;
var Rate = require('./rates').Rates;
var Service = require('./services').Services;
var Language = require('./languages').Languages;

// Define our Fee schema
var FeeSchema = new Schema({
    rate: [Rate.schema],
    service: [Service.schema],
    income: String,
    amountSalaries: Number,
    valueLoan: String,
    deadlineMonths: Number,
    symbol: String,
    bank: [Bank.schema],
    lang: [Language.schema],
    creationDate: Date,
    lastEditionDate: Date,
    enabled: Boolean
},{ versionKey: false });

// Export the Mongoose model
module.exports.Fees = mongoose.model('Fees', FeeSchema);