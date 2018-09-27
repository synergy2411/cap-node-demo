var express = require("express");
var app = express();
var logger  = require('./logger');
var cookieParser = require("cookie-parser");

//built-in middleware
app.use(cookieParser());
//My customer middleware : coming from module
app.use(logger);
//My customer middleware : inline middleware
app.use(function(req, res, next){
    console.log(req.cookies);
    if(req.cookies.name){
        console.log("Cookie exist.");
    }else{
        res.cookie("name", "value", { maxAge : 10000, 
                httpOnly: true, 
                expires : 2000
            });
    }
    next();
})

app.get("/user", function(req, res){
    // console.log(req);
    res.send("Hello from Express!");
    // res.send("Hello World!");
})

app.listen(3030, function(){
    console.log("Express running on port 3030")
})


// var express = require('express');
// var cookieParser = require('cookie-parser');
// var app = express()
//     .use(cookieParser())
//     .use(function (req, res) {
//         if (req.cookies.name) {
//             console.log('User name:', req.cookies.name);
//         }
//         else {
//             res.cookie('name', 'foo');
//         }
//         res.end('Hello!');
//     })
//     .listen(3000);