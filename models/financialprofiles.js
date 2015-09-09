// Load required packages
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Embebed Models
var User = require('./users').User;

// Define our Financial Profile schema
var FinancialProfileSchema = new Schema({
    user: [User.schema],
    income: String,
    amountSalaries: Number,
    creationDate: Date,
    lastEditionDate: Date,
    enabled: Boolean
},{ versionKey: false });

// Export the Mongoose model
module.exports.FinancialProfiles = mongoose.model('FinancialProfiles', FinancialProfileSchema);