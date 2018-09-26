var EventEmitter = require("events").EventEmitter;
var stream = require("stream");

// console.log(new stream.Stream() instanceof EventEmitter);
// console.log(new stream.Readable() instanceof stream.Stream);
// console.log(new stream.Writable() instanceof stream.Stream);
// console.log(new stream.Transform() instanceof stream.Stream);
// console.log(new stream.Duplex() instanceof stream.Stream);

// process.stdin.on("readable", function(){
//     var buff = process.stdin.read();
//     if(buff != null){
//         process.stdout.write(buff);
//     }
// })

//Transform

// var fs  = require('fs');
// var gzip = require('zlib').createGzip;
// var readStream = fs.createReadStream("test.txt");
// var writeStream = fs.createWriteStream("zipped.txt");
// readStream.pipe(gzip()).pipe(writeStream)
