var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};

//console.log(counter(['shaun', 'crystal', 'ryu']));

var adder = function(a,b) {
    return `The sum of the 2 numbers is ${a + b}`;
};

var pi = 3.142

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
    conter: counter,
    adder: adder,
    pi: pi
};

//Module exports are the instruction that tells Node. js which bits of code (functions, objects, strings, etc.) 
//to “export” from a given file so other files are allowed to access the exported code.