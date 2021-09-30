var fs = require('fs');
var stream = fs.createReadStream(__dirname + '/file1.txt');

stream.on('data', function(chunk123){
    console.log("New chunk found");
    console.log(chunk123);
});