var fs = require("fs");
var writeStream = fs.createWriteStream("./logger.txt");

module.exports = function(req, res, next){
    
    var start = +new Date();

    req.on("readable", function(){
        console.log("Request is readable");
    })

    res.on("finish", function(){
        var end = +new Date();
        var duration = end - start;
        writeStream.write("Server took "+ duration +"ms to respond on "+ req.url+"\n");
        console.log("Server took "+ duration +"ms to respond on "+ req.url);
    })

    //Transfer the control back to server
    next();
}