//  FS (FileSystem) 

 var fs = require('fs');
var readStream = fs.createReadStream("test.txt");
// var writeStream = fs.createWriteStream("new-test.txt");
// readStream.pipe(writeStream);

// var chunk = null;
// // console.log(readStream);
// readStream.on("readable", function(){
//     while(null != (chunk = readStream.read())){
//         console.log(chunk.toString());
//     }
// })


// fs.readFile("test.txt", function(err, data){
//         console.log(data.toString());      //Buffer    
// })

// var data = fs.readFileSync("new-test.txt");
// console.log(data.toString());

// // 	UTIL Module


