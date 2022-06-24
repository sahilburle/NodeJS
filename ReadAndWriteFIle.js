/*
Node. js includes fs module to access physical file system.
The fs module is responsible for all the asynchronous or synchronous file I/O operations.
*/

var fs = require('fs');

/*
readFileSync() method, we can read files in a synchronous way, i.e.
we are telling node. js to block other parallel process and do the current file reading process.
That is, when the fs. readFileSync() method is called the original node program stops executing, and node waits for the fs
*/
//var readMe = 

fs.readFile('readMe.txt', 'utf8', function(err, data){

    if (err) console.log(err);

    fs.writeFile('writeMe.txt', data, (err) => {

        if (err) console.log(err);

    });

});

//console.log(readMe);

//fs.writeFileSync('writeMe.txt', readMe);

fs.readFile('readMe.txt', 'utf8', function(err, data){

    if (err) console.log(err);

    fs.writeFile('writeMe.txt', data, (err) => {

        if (err) console.log(err);

    });

});