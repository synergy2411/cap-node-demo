var app = require("express")();
var http = require("http");
var server = http.createServer(app);
var io = require("socket.io")(server);
var mongoUtil = require("../mongoUtil");

mongoUtil.connect();

var chatterName;
var msgStack = [];

app.get("/", function(req, res){
    res.sendFile(__dirname+"/public/socket-client.html");
})

io.on("connection", function(client){
    console.log("New Client Connected");
    client.on("msgToServer", function(username, msg){
        console.log(username + " says - " + msg);
        chatterName = username;
        msgStack.push(msg);
        client.emit("msgToClient", "Me", msg);
        client.broadcast.emit("msgToClient", username,msg);
    });
    client.on("disconnect", function(){
        console.log("client disconnected");
        mongoUtil.insertUser({
            username : chatterName,
            messages : msgStack
        });
    })
})

server.listen(3030, function(){
    console.log("Socket server is running...");
})