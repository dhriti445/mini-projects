var fs = require("fs");
var data1 = '';

var readerStream = fs.createReadStream('testfile.txt');
readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk) {
   data1 += chunk;
});

readerStream.on('end',function() {
   console.log("Data in file is =",data);
});

readerStream.on('error', function(err) {
   console.log("MyError =",err.stack);
});

//console.log("Program Ended");