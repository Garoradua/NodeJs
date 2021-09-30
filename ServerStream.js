var http = require('http');
// const { type } = require('os');
var fs = require('fs');


var server = http.createServer(function(req, res){
    console.log(req.url);
    res.writeHead(200, {'Content-Type' : 'text/html' });
    var stream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
    stream.pipe(res)
});

server.listen(5000, '127.0.0.1');



