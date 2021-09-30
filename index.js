var http = require('http');
// const { type } = require('os');

var server = http.createServer(function(req, res){
    console.log(req.url);
    res.writeHead(200, {'Content-Type' : 'text/plain' });
    res.end("Hello Gourav");
});

server.listen(2000, '127.0.0.1');
