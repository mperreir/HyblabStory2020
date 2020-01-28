// Use strict mode
'use strict';

// Load usefull expressjs and nodejs objects / modules
var express = require('express');
var path = require('path');

var app = express();

// Minimum routing: serve static content from the html directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../__common-logos__')));

var port = 'PORT' in process.env ? process.env.PORT : 8080;
var server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Hyblab routing app listening at http://%s:%s', host, port)
})

module.exports = app;
