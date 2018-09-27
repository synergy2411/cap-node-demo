var express = require("express");
var app = express();
var logger  = require('./logger');

app.use(logger);

app.get("/", function(req, res){
    res.send("Hello from Express!")
})

app.listen(3030, function(){
    console.log("Express running on port 3030")
})