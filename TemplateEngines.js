var expres = require('express');
var app = expres();
/*
View engines are useful for rendering web pages.
There are many view engines like Mustache, Handlebars, EJS, etc but the most popular EJS which simply stands for Embedded JavaScript.
It is a simple templating language/engine that lets its user generate HTML with plain javascript
*/
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/contact.html');
})

app.get('/profile/:name', function(req, res){
    var data = {
        age: 29,
        job: 'ninja'
    }
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);