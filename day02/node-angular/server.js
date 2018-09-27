var express = require("express");
var app = express();

app.use(express.static(__dirname+"/static"));

app.get("/", function(req, res ){
    res.sendFile(__dirname+"/static/index.html");
})

app.listen(3030, function(){
    console.log("Express is running...");
})