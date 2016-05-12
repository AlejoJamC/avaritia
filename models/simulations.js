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
var SimulationSchema = new Schema({
    rateId: Schema.Types.ObjectId,
    rate: String,
    serviceId: Schema.Types.ObjectId,
    service: String,
    fees:{
        income: Number,
        valueLoan: Number,
        amountMonths: Number
    },
    deadlines:{
        income: Number,
        valueLoan: Number,
        monthlyValue: Number
    },
    amount:{
        income: Number,
        monthlyValue: Number,
        amountMonths: Number
    },
    languageId: Schema.Types.ObjectId,
    language: String,
    creationDate: Date,
    lastEditionDate: Date,
    enabled: Boolean
},{ versionKey: false });

// Export the Mongoose model
module.exports.Simulations = mongoose.model('Simulations', SimulationSchema);