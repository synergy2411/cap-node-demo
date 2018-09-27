var mongodb = require("mongodb");
var client = mongodb.MongoClient;

var _db;

module.exports.connect = function(){
    client.connect("mongodb://localhost:27017", function(err, database){
        if(err) {
            process.exit(1);
        }
        console.log("Mongo Connected Now!");
        _db = database.db("cap_db");
    })
}

module.exports.insertUser = function(user){
    _db.collection("users").insert(user, function(err, result){
        if(err) console.log(log);
        console.log("Data Inserted");
    })
}