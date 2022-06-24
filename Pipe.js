var http = require('http');
var fs = require('fs');

// var myWriteStream = fs.createWriteStream(__dirname + '/streamrite.txt');
// myReadStream.pipe(myWriteStream);

var server = http.createServer(function(req, res){

    console.log('request was made: ' + req.url);

    res.writeHead(200, {'Content-Type': 'text/plain'});

    var myReadStream = fs.createReadStream(__dirname + '/streamread.txt', 'utf8');

    /*
    pipe() method in a Readable Stream is used to attach a Writable stream to the readable stream
    so that it consequently switches into flowing mode and then pushes all the data that it has to the attached Writable.
    */
    myReadStream.pipe(res);
    /*
    Pipes can be used to connect multiple streams together.
    One of the most common example is to pipe the read and write stream together for the transfer of data from one file to the other.
    */

});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');