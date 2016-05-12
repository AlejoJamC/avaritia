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

// Define our Simulation schema
// TODO: arreglar este desastre de modelo, todo quedo en el primer nivel para facilitar las consultas
var bankRateServiceSchema = new Schema({
    rateId: Schema.Types.ObjectId,
    rate: String,
    rateValue: Number,
    serviceId: Schema.Types.ObjectId,
    service: String,
    bankId: Schema.Types.ObjectId,
    bank: String,
    creationDate: Date,
    lastEditionDate: Date,
    enabled: Boolean
},{ versionKey: false });

// Export the Mongoose model
module.exports.BankRateService = mongoose.model('BankRateService', bankRateServiceSchema);
