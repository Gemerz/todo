
'use strict';

/**
 * Module dependencies.
 */

var mongorito = require('mongorito');
var Model = Mongorito.Model;
Model.connect('localhost/todo');
module.exports = Model;

