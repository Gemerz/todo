'use strict';

/**
 * Module dependencies.
 */

var User = require('../models/user');

exports.list = function* () {
    this.body = yield User.list();
};
