var color = require("colors");

var _ = require("underscore");
console.log(_.min([2,4,2,55,1]));

console.log("Welcome to Node".red);
console.log("Welcome to Node".green);
process.exit(1);
console.log("Welcome to Node".blue);
console.log("Welcome to Node".inverse);

console.log(__filename, __dirname);







// var colors = require('colors/safe');
 
// console.log(colors.green('hello')); // outputs green text
// console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text
// console.log(colors.inverse('inverse the color')); // inverses the color
// console.log(colors.rainbow('OMG Rainbows!')); // rainbow
// console.log(colors.trap('Run the trap'));