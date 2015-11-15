/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

// Load required packages
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Embebed Models
var User = require('./users').User;

// Define our Financial Profile schema
var FinancialProfileSchema = new Schema({
    user: [User.schema],
    income: Number,
    amountSalaries: Number,
    creationDate: Date,
    lastEditionDate: Date,
    enabled: Boolean
},{ versionKey: false });

// Export the Mongoose model
module.exports.FinancialProfiles = mongoose.model('FinancialProfiles', FinancialProfileSchema);