/**
 * Module dependencies
 */
var Logger = require('../config/logger');
var logger = Logger.logger;
var moment = require('moment');

/**
 * setupRouter
 *
 * @description Configure all routes on express router
 *
 * @param {express.Router}      router      The varaible router used by the server
 */
function setupRouter (router){

    // logger for all request will first hits this middleware
    router.use(function (req, res, next) {
        var now = moment(new Date());

        var date = now.format("DD-MM-YYYY HH:mm");
        logger.info('%s %s %s', req.method, req.url, date);
        next();
    });

    /**
     *  Declare all routes
     */
    var userRoutes = require('./users');

    /**
     *  Document:  USERS.JS
     *  Define routes where they are stored endpoints
     */
    //// ENDPOINT: /users
    //router.route('/users')
    //    .get(userRoutes.getUsers)
    //    .post(userRoutes.postUser);
    //
    //// ENDPOINT: /users/:id
    //router.route('/users/:id')
    //    .get(userRoutes.getUserById)
    //    .put(userRoutes.putUser)
    //    .patch(userRoutes.patchUser)
    //    .delete(userRoutes.deleteUser);
    //
    //// ENDPOINT: /login
    //router.route('/login')
    //    .get(userRoutes.getLogin);
    /**
     * ====================================================================
     */
}

// Export the function that initialize all routes
module.exports.setupRouter = setupRouter;