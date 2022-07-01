var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var monngoose = require('mongoose');

var port = 8080;

app.listen(port, function() {
    console.log('app listen on port' + port);
});
