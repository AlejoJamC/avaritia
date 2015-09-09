// Load required packages
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Embebed Models
var Language = require('./languages').Languages;

// Define our Emotion schema
var ServicesSchema = new Schema({
    name: String,
    description: String,
    lang: [Language.schema],
    creationDate: Date,
    lastEditionDate: Date,
    enabled: Boolean
},{ versionKey: false });

// Export the Mongoose model
module.exports.Services = mongoose.model('Services', ServicesSchema);