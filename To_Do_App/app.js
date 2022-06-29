var express = require('express');
const todocontroller = require('./controllers/todocontroller');
var todoCOntroller = require('./controllers/todocontroller');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'))

//fire controllers
todocontroller();

//listen to port
app.listen(3000);
console.log('u r listening to 3000');