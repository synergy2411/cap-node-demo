var str = "Sample String";

var buff = new Buffer(str, "utf-8");

console.log(buff);

var roundTrip = buff.toString();
console.log(roundTrip);