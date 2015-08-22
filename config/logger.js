/**
 * Module dependencies
 */
var fs = require('fs');
var path = require('path');
var winston = require('winston');
winston.emitErrs = true;

// paths of logging files
var fileinfo = path.join(__dirname,'..','logs','infologs.log');
var filedebug = path.join(__dirname,'..','logs','debuglogs.log');
var filerror = path.join(__dirname,'..','logs','errorlogs.log');

//
// Remove the file, ignoring any errors
//
try { fs.unlinkSync(fileinfo); fs.unlinkSync(filedebug); fs.unlinkSync(filerror); }
catch (ex) { }

var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.File)({
            level: 'info',
            name: 'info-file',
            filename: fileinfo,
            handleExceptions: true,
            maxsize: 5242880, // 5 MB
            maxFiles: 5,
            colorize: false
        }),
        new (winston.transports.File)({
            level: 'error',
            name: 'error-file',
            filename: filerror,
            handleExceptions: true,
            maxsize: 5242880, // 5 MB
            maxFiles: 5,
            colorize: false
        }),
        new (winston.transports.File)({
            level: 'debug',
            name: 'debug-file',
            filename:filedebug,
            handleExceptions: true,
            maxsize: 5242880, // 5 MB
            maxFiles: 5,
            colorize: false
        }),
        new (winston.transports.Console)({
            level: 'info',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

module.exports.logger = logger;
/**module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};*/