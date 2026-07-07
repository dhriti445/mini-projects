var fs = require("fs");

var readerStream = fs.createReadStream('testfile.txt');

var writerStream = fs.createWriteStream('newfile.txt');

readerStream.pipe(writerStream);

console.log("Program Ended");