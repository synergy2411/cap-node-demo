// 	Events Module
    // var EventEmitter = require('events').EventEmitter;
    // var emitter = new EventEmitter();

    // // Handlers
    // function fooHandler(msg){
    //     console.log("Handler fired with "+ msg.data);
    // }
    // // subscribe : on()

    // emitter.on("newListener", function(){
    //     console.log("New Handler Added!");
    // });

    // emitter.on("Foo", function(){
    //     console.log("Foo Event Called!");
    // })
    
    // emitter.on("Foo", fooHandler);

  
    // // trigger : emit()


    // emitter.emit("Foo", {data : "Hello Message"});


    var EventEmitter = require('events').EventEmitter;

    var emitter = new EventEmitter();

    emitter.on("newListener", function(eventName , listener){
        console.log(eventName + " Event triggered " + listener.name);
    })

    function barHandler (){
        console.log("Bar Event");
    }

    //Subscribe
    emitter.on("bar",barHandler);

    //Trigger
    emitter.emit('bar');

// var EventEmitter = require("events").EventEmitter;
// var emitter = new EventEmitter();

// emitter.on("removeListener", function(eventName, listenerFunc){
//     console.log(eventName +" removed from "+ listenerFunc.name);
// })

// function Handler1(){
//     console.log("Handler1 called");
// }
// function Handler2(){
//     console.log("Handler2 called");
//     emitter.removeListener("foo", Handler1);
// }

// emitter.on("foo", Handler1);
// emitter.on("foo", Handler2);


// emitter.emit("foo");
// emitter.emit("foo");
