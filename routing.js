var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log(req.url);
    if(req.url == '/home'){
        res.writeHead(200, {'Content-Type' : 'text/html' });
        fs.createReadStream(__dirname + '/index.html', 'utf-8').pipe(res);
    }else{
        res.writeHead(200, {'Content-Type' : 'text/plain' });
        fs.createReadStream(__dirname + '/file1.txt', 'utf-8').pipe(res);
    }
});

server.listen(2000, '127.0.0.1');