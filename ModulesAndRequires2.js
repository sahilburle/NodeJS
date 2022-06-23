//var counter = require('./ModulesAndRequire1');

//require() is a built-in function to include external modules that exist in separate files.
//require() statement basically reads a JavaScript file, 
//executes it, and then proceeds to return the export object.

var stuff = require('./ModulesAndRequire1'); 

//console.log(counter(['shaun', 'crystal', 'ryu']));

console.log(stuff.counter(['shaun', 'crystal', 'ryu']));

console.log(stuff.adder(5,6));

console.log(stuff.adder(stuff.pi, 5));