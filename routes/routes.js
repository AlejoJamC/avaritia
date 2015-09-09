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
    var authRoutes = require('./auth');
    var clientRoutes = require('./clients');
    var languageRoutes = require('./languages');
    var oauth2Routes = require('./oauth2');
    var serviceRoutes = require('./services');
    var userRoutes = require('./users');

    /**
     *  Document:  LANGUAGE.JS
     *  Define routes where they are stored endpoints
     */
        // ENDPOINT: /languages
        // ENDPOINT: /languages?name=value
        // ENDPOINT: /languages?iso=value
    router.route('/languages')
        .get(authRoutes.isAuthenticated, languageRoutes.getLanguages)
        .post(authRoutes.isAuthenticated, languageRoutes.postLanguage);

    // ENDPOINT: /languages/:id
    router.route('/languages/:id')
        .get(authRoutes.isAuthenticated, languageRoutes.getLanguageById)
        .put(authRoutes.isAuthenticated, languageRoutes.putLanguage)
        .patch(authRoutes.isAuthenticated, languageRoutes.patchLanguage)
        .delete(authRoutes.isAuthenticated, languageRoutes.deleteLanguage);
    /**
     * ====================================================================
     */

    /**
     *  Document:  CLIENTS.JS
     *  Define routes where they are stored endpoints
     */
        // ENDPOINT: /clients
    router.route('/clients')
        .get(authRoutes.isAuthenticated, clientRoutes.getClientByIdClient)
        .post(authRoutes.isAuthenticated, clientRoutes.postClient);

    // ENDPOINT: /clients/:id
    router.route('/clients/:id')
        .delete(authRoutes.isAuthenticated, clientRoutes.deleteClient);
    /**
     * ====================================================================
     */

    /**
     *  Document:  OAUTH2.JS
     *  Create endpoint handlers for oauth2 authorize
     */
        // ENDPOINT: /oauth2/authorize
    router.route('/oauth2/authorize')
        .get(authRoutes.isAuthenticated, oauth2Routes.authorization)
        .post(authRoutes.isAuthenticated, oauth2Routes.decision);

    // ENDPOINT: /oauth2/token
    router.route('/oauth2/token')
        .post(authRoutes.isClientAuthenticated, oauth2Routes.token);
    /**
     * ====================================================================
     */

    /**
     *  Document:  SERVICES.JS
     *  Define routes where they are stored endpoints
     */
        // ENDPOINT: /services
        // ENDPOINT: /services?name=value
    router.route('/services')
        .get(authRoutes.isAuthenticated, serviceRoutes.getLanguages)
        .post(authRoutes.isAuthenticated, serviceRoutes.postLanguage);

    // ENDPOINT: /services/:id
    router.route('/services/:id')
        .get(authRoutes.isAuthenticated, serviceRoutes.getLanguageById)
        .put(authRoutes.isAuthenticated, serviceRoutes.putLanguage)
        .patch(authRoutes.isAuthenticated, serviceRoutes.patchLanguage)
        .delete(authRoutes.isAuthenticated, serviceRoutes.deleteLanguage);
    /**
     * ====================================================================
     */

    /**
     *  Document:  USERS.JS
     *  Define routes where they are stored endpoints
     */
        // ENDPOINT: /users
    router.route('/users')
        .get(authRoutes.isAuthenticated, userRoutes.getUsers)
        .post(userRoutes.postUser); // TODO: POST usuario no tiene seguridad

    // ENDPOINT: /users/:id
    router.route('/users/:id')
        .get(authRoutes.isAuthenticated, userRoutes.getUserById)
        .put(authRoutes.isAuthenticated, userRoutes.putUser)
        .patch(authRoutes.isAuthenticated, userRoutes.patchUser)
        .delete(authRoutes.isAuthenticated, userRoutes.deleteUser);

    // ENDPOINT: /login
    router.route('/login')
        .get(authRoutes.isLoginAuthenticated, userRoutes.getLogin);

    /**
     * ====================================================================
     */
}

// Export the function that initialize all routes
module.exports.setupRouter = setupRouter;