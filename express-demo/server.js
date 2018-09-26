var express = require("express");
var app = express();
var morgan = require("morgan");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : true}));

app.use(morgan(("dev")));

//Making public as static folder
app.use(express.static(__dirname+'/public'));

// var app = require("express")();

app.get("/", function(request, response){
    // console.log("Method : " + request.method);
    // console.log("URL : " + request.url);
    // response.send("Hello from Express!");
    response.sendFile(__dirname+"/public/index.html");
});

app.get("/login", function(req, res){
    if(req.query){
        console.log("Username : " + req.query.username)
        console.log("Password : " + req.query.password)
    }
    res.send("Data Received!");
});

app.post("/login", function(req, res){
    if(req.body){
        console.log(req.body);
    }
    res.send("API HIT!");
})

app.get("/user", function(request, response){
    response.json({"users" : [{name: "Foo"}, {name : "Bar"}]})
});

app.listen(3030, function(){
    console.log("Express server running now on Port 3030...");
})
