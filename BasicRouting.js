// Routing refers to how an application's endpoints (URIs) respond to client requests.

var http = require('http');
var fs = require('fs');
/*
createServer() method turns your computer into an HTTP server.
The http.createServer() method creates an HTTP Server object.
The HTTP Server object can listen to ports on your computer and execute a function
*/
var server = http.createServer(function(req, res){
/*
Both req and res are made available to us by the Express framework.
The req object represents the HTTP request and has properties for the request query string, parameters, body, and HTTP headers.
The res object represents the HTTP response that an Express app sends when it gets an HTTP request.
*/
    console.log('request was made: ' + req.url);

    if(req.url === '/home' || req.url === '/'){

        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }

    else if(req.url === '/contact'){

        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }

    else if(req.urll === '/api/ninjas'){

        var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age:32}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    }
    
    else{

        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
    
    /*
    Content-Type in the response is the header we can set to inform how client would interpret the data from the server.
    For example, if you are sending down an HTML file to the client, you should set the Content-Type to text/html
    */
    
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');