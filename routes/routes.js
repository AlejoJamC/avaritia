/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

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

        var date = now.format('DD-MM-YYYY HH:mm');
        logger.info('%s %s %s', req.method, req.url, date);
        next();
    });

    /**
     *  Declare all routes
     */
    var authRoutes = require('./auth');
    var amountRoutes = require('./amounts');
    var bankRoutes = require('./banks');
    var clientRoutes = require('./clients');
    var countryRoutes = require('./countries');
    var currencyRoutes = require('./currencies');
    var deadlineRoutes = require('./deadlines');
    var feeRoutes = require('./fees');
    var financialProfileRoutes = require('./financialProfiles');
    var languageRoutes = require('./languages');
    var oauth2Routes = require('./oauth2');
    var rateRoutes = require('./rates');
    var serviceRoutes = require('./services');
    var userRoutes = require('./users');


    /**
     *  Document:  AMOUNTS.JS
     *  Define routes where they are stored endpoints
     */
        // ENDPOINT: /banks
    router.route('/banks')
        .get(authRoutes.isAuthenticated, amountRoutes.getAmounts)
        .post(authRoutes.isAuthenticated, amountRoutes.postAmount);

    // ENDPOINT: /banks/:id
    router.route('/banks/:id')
        .get(authRoutes.isAuthenticated, amountRoutes.getAmountById)
        .put(authRoutes.isAuthenticated, amountRoutes.putAmount)
        .patch(authRoutes.isAuthenticated, amountRoutes.patchAmount)
        .delete(authRoutes.isAuthenticated, amountRoutes.deleteAmount);
    /**
     * ====================================================================
     */


    /**
     *  Document:  BANKS.JS
     *  Define routes where they are stored endpoints
     */
        // ENDPOINT: /banks
    router.route('/banks')
        .get(authRoutes.isAuthenticated, bankRoutes.getBanks)
        .post(authRoutes.isAuthenticated, bankRoutes.postBank);

    // ENDPOINT: /banks/:id
    router.route('/banks/:id')
        .get(authRoutes.isAuthenticated, bankRoutes.getBankById)
        .put(authRoutes.isAuthenticated, bankRoutes.putBank)
        .patch(authRoutes.isAuthenticated, bankRoutes.patchBank)
        .delete(authRoutes.isAuthenticated, bankRoutes.deleteBank);
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
     *  Document:  COUNTRIES.JS
     *  Define routes where they are stored endpoints
     */
        // ENDPOINT: /countries
    router.route('/countries')
        .get(authRoutes.isAuthenticated, countryRoutes.getCountries)
        .post(authRoutes.isAuthenticated, countryRoutes.postCountry);

    // ENDPOINT: /countries/:id
    router.route('/countries/:id')
        .get(authRoutes.isAuthenticated, countryRoutes.getCountryById)
        .put(authRoutes.isAuthenticated, countryRoutes.putCountry)
        .patch(authRoutes.isAuthenticated, countryRoutes.patchCountry)
        .delete(authRoutes.isAuthenticated, countryRoutes.deleteCountry);
    /**
     * ====================================================================
     */


    /**
     *  Document:  CURRENCIES.JS
     *  Define routes where they are stored endpoints
     */
        // ENDPOINT: /currencies
    router.route('/currencies')
        .get(authRoutes.isAuthenticated, currencyRoutes.getCurrencies)
        .post(authRoutes.isAuthenticated, currencyRoutes.postCurrency);

    // ENDPOINT: /currencies/:id
    router.route('/currencies/:id')
        .get(authRoutes.isAuthenticated, currencyRoutes.getCurrencyById)
        .put(authRoutes.isAuthenticated, currencyRoutes.putCurrency)
        .patch(authRoutes.isAuthenticated, currencyRoutes.patchCurrency)
        .delete(authRoutes.isAuthenticated, currencyRoutes.deleteCurrency);
    /**
     * ====================================================================
     */


    /**
     *  Document:  DEADLINES.JS
     *  Define routes where they are stored endpoints
     */
        // ENDPOINT: /deadlines
    router.route('/deadlines')
        .get(authRoutes.isAuthenticated, deadlineRoutes.getDeadlines)
        .post(authRoutes.isAuthenticated, deadlineRoutes.postDeadline);

    // ENDPOINT: /deadlines/:id
    router.route('/deadlines/:id')
        .get(authRoutes.isAuthenticated, deadlineRoutes.getDeadlineById)
        .put(authRoutes.isAuthenticated, deadlineRoutes.putDeadline)
        .patch(authRoutes.isAuthenticated, deadlineRoutes.patchDeadline)
        .delete(authRoutes.isAuthenticated, deadlineRoutes.deleteDeadline);
    /**
     * ====================================================================
     */


    /**
     *  Document:  FEES.JS
     *  Define routes where they are stored endpoints
     */
        // ENDPOINT: /fees
    router.route('/fees')
        .get(authRoutes.isAuthenticated, feeRoutes.getFees)
        .post(authRoutes.isAuthenticated, feeRoutes.postFee);

    // ENDPOINT: /fees/:id
    router.route('/fees/:id')
        .get(authRoutes.isAuthenticated, feeRoutes.getFeeById)
        .put(authRoutes.isAuthenticated, feeRoutes.putFee)
        .patch(authRoutes.isAuthenticated, feeRoutes.patchFee)
        .delete(authRoutes.isAuthenticated, feeRoutes.deleteFee);
    /**
     * ====================================================================
     */


    /**
     *  Document:  FINANCIALPROFILES.JS
     *  Define routes where they are stored endpoints
     */
        // ENDPOINT: /financial/profiles
    router.route('/financial/profiles')
        .get(authRoutes.isAuthenticated, financialProfileRoutes.getFinancialProfiles)
        .post(authRoutes.isAuthenticated, financialProfileRoutes.postFinancialProfile);

    // ENDPOINT: /financial/profiles/:id
    router.route('/financial/profiles/:id')
        .get(authRoutes.isAuthenticated, financialProfileRoutes.getFinancialProfileById)
        .put(authRoutes.isAuthenticated, financialProfileRoutes.putFinancialProfile)
        .patch(authRoutes.isAuthenticated, financialProfileRoutes.patchFinancialProfile)
        .delete(authRoutes.isAuthenticated, financialProfileRoutes.deleteFinancialProfile);
    /**
     * ====================================================================
     */


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
     *  Document:  RATES.JS
     *  Define routes where they are stored endpoints
     */
    // ENDPOINT: /rates
    router.route('/rates')
        .get(authRoutes.isAuthenticated, rateRoutes.getRates)
        .post(authRoutes.isAuthenticated, rateRoutes.postRate);

    // ENDPOINT: /rates/:id
    router.route('/rates/:id')
        .get(authRoutes.isAuthenticated, rateRoutes.getRateById)
        .put(authRoutes.isAuthenticated, rateRoutes.putRate)
        .patch(authRoutes.isAuthenticated, rateRoutes.patchRate)
        .delete(authRoutes.isAuthenticated, rateRoutes.deleteRate);
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
        .get(authRoutes.isAuthenticated, serviceRoutes.getServices)
        .post(authRoutes.isAuthenticated, serviceRoutes.postService);

    // ENDPOINT: /services/:id
    router.route('/services/:id')
        .get(authRoutes.isAuthenticated, serviceRoutes.getServiceById)
        .put(authRoutes.isAuthenticated, serviceRoutes.putService)
        .patch(authRoutes.isAuthenticated, serviceRoutes.patchService)
        .delete(authRoutes.isAuthenticated, serviceRoutes.deleteService);
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