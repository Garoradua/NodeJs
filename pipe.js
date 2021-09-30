var fs = require('fs');

var read = fs.createReadStream(__dirname + '/file1.txt', 'utf-8');
var writestream = fs.createWriteStream(__dirname + '/file4.txt');

read.pipe(writestream);