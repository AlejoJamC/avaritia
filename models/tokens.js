/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

// Load required packages
var mongoose = require('mongoose');
// TODO: encriptar el value del access token
// Define our token schema
var TokenSchema = new mongoose.Schema({
    value: {
        type : String,
        required : true
    },
    idUser: {
        type : String,
        required : true
    },
    idClient : {
        type: String,
        required: true
    }
},{ versionKey: false });

// Export the Mongoose model
module.exports.Token = mongoose.model('Token', TokenSchema);