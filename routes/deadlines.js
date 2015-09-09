// Load required packages
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Embebed Models
var Bank = require('./banks').Banks;
var Rate = require('./rates').Rates;
var Service = require('./services').Services;
var Language = require('./languages').Languages;
var Currency = require('./currencies').Currencies;

// Define our Deadlines schema
var DeadlineSchema = new Schema({
    rate: [Rate.schema],
    service: [Service.schema],
    income: Number,
    amountSalaries: Number,
    valueLoan: Number,
    monthlyValue: Number,
    bank: [Bank.schema],
    currency: [Currency.schema],
    lang: [Language.schema],
    creationDate: Date,
    lastEditionDate: Date,
    enabled: Boolean
},{ versionKey: false });

// Export the Mongoose model
module.exports.Deadlines = mongoose.model('Deadlines', DeadlineSchema);