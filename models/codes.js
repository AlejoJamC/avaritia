/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

// Load required packages
var mongoose = require('mongoose');
// TODO: encriptar value que es el codigo de autorizacion
// Define our token schema
var CodeSchema   = new mongoose.Schema({
    value: {
        type: String,
        required: true
    },
    redirectUri: {
        type: String,
        required: true
    },
    idUser: {
        type: String,
        required: true
    },
    idClient: {
        type: String,
        required: true
    }
},{ versionKey: false });

// Export the Mongoose model
module.exports.Code = mongoose.model('Code', CodeSchema);