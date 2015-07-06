'use strict';

/**
 * Module dependencies.
 */

var utility = require('utility');
var crypto = require('crypto');
var model = require('../common/mogo_db');


class Post extends Model {


}
var post = new Post({
    title: 'Node.js with --harmony rocks!',
    body: 'Long post body',
    author: {
        name: 'John Doe'
    }
});

// create
yield post.save();


