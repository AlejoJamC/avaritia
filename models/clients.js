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
// TODO: encriptar el secret
// Define our client schema
var ClientSchema = new Schema({
    name : {
        type : String,
        unique : true,
        required: true
    },
    id : {
        type: String,
        required : true
    },
    secret : {
        type : String,
        required : true
    },
    idUser : {
        type : Schema.Types.ObjectId,
        required: true
    }
},{ versionKey: false });

// Export the Mongoose model
module.exports.Client = mongoose.model('Client', ClientSchema);