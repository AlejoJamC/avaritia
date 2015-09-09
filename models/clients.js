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