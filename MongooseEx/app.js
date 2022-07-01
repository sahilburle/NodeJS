var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./book.model');

var db = 'mongodb://localhost/example';

mongoose.connect(db);

app.get('/', function(req, res) {
    res.send('happy to be  here');
});

app.get('/books', function(req, res) {
    console.log('getting all books');
    Book.find({})
});

var port = 8080;

app.listen(port, function() {
    console.log('app listening on port ' + port);
});