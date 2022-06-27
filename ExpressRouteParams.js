var expres = require('express');

var app = expres();

app.get('/', function(req, res){
    res.send('this is the homepage');
})

app.get('/contact', function(req, res){
    res.send('this is the contact page');
})
/*
params property is an object containing properties mapped to the named route “parameters”.
For example, if you have the route /student/:id, then the “id” property is available as req.params.id.
This object defaults to {}
*/
app.get('/profile/:id', function(req, res){
    res.send('you requeste to see profile with the id of ' + req.params.id);
});

app.get('/profile/:name', function(req, res){
    res.send('you requeste to see profile with the name of ' + req.params.name);
});

app.listen(3000);