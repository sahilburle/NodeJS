//EventEmitter is a module that facilitates communication/interaction between objects in Node.

var events = require('events');

var util = require('util');

var Person = function(name) {
    this.name = name;
};

//util.inherits() method basically inherits the methods from one construct to another
util.inherits(Person, events.EventEmitter);

//new keyword is used in javascript to create a object from a constructor function
var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var people = [james, mary, ryu];

people.forEach(function(person){
    //on property is used to bind a function with the event
    person.on('speak', function(msg){
        console.log(person.name + ' said: ' + msg)
    });
});

//emit is used to fire an event.
james.emit('speak', 'hey dudes');
ryu.emit('speak', 'i want curry');


// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(msg){
//     console.log(msg);
// });

// myEmitter.emit('someEvent', 'the event was emitted');