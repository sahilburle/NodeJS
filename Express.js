/*
Express is a node js web application framework that provides broad features for building web and mobile applications.
It is used to build a single page, multipage, and hybrid web application.
It's a layer built on the top of the Node js that helps manage servers and routes.
*/

var expres = require('express');

var app = expres();

app.get('/', function(req, res){
    res.send('this is the homepage');
})

app.get('/contact', function(req, res){
    res.send('this is the contact page');
})

app.listen(3000);



/* Responding to Requests:

GET - app.get('route', fn)
POST - app.post('route', fn)
DELETE - app.delete('route', fn)
*/