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

module.exports.findUser = function(key){
    _db.collection("users").find(key).toArray(function(err, docs){
        if(err) console.log(err);
        console.log(docs);
    })
}

module.exports.deleteUser = function(key){
    _db.collection("users").remove(key, function(err, result){
        if(err) console.log(err);
        console.log("User Record Deleted");
    })
}

module.exports.updateUser = function(key){
    const collection = _db.collection('users');
    collection.updateOne(key
    , { $set: { password : "new-password" } }, function(err, result) {
        if(err) console.log(err);
    console.log("Updated the Record.");
  }); 


}