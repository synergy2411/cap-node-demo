var express = require("express");
var app = express();
var mongoUtil = require("./mongoUtil");
var bodyParser = require("body-parser");
var username, password ;
mongoUtil.connect();
app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static(__dirname+"/public"));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/public/index.html");
})

app.post("/login", function(req, res){
    if(req.body){
        console.log(req.body);
        var user = {
            username : req.body.username,
            password :req.body.password
        }
        mongoUtil.insertUser(user);
    }
    res.send("API HIT");
})

app.post("/find", function(req, res){
    if(req.body){
        var key = { "username" : req.body.username };
        mongoUtil.findUser(key);
    }
    res.send("API HIT");
})

app.post("/delete", function(req, res){
    if(req.body){
        var key = { "username" : req.body.username };
        mongoUtil.deleteUser(key);
    }
    res.send("API HIT");
})

app.post("/update", function(req, res){
    if(req.body){
        var key = { "username" : req.body.username };
        mongoUtil.updateUser(key);
    }
    res.send("API HIT");
})


app.listen(3030, function(){
    console.log("Server is running...");
})