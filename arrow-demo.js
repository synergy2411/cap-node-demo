var numbers = [1,2,3,4,5];

//ES5
var newArr = numbers.map(function(value, index, array){
    // console.log(value, index, array);
    return value * 2;
});

//ES6 : Arrow Functions
//online function returning value
var newArr2 = numbers.map(value=>value*2);

//Multiline arrow function returning value
var newArr1 = numbers.map((value,index, array)=>{
    // code here
    return value*2;
});

// for(var item of numbers){
//     console.log(item);
// }

// console.log(newArr);


//function within function


// var func1 = ()=>{
//     //ES5 way
//     function abc(num1, num2){return num1 + num2}
//     //ES6 way
//     // return (num1, num2)=>num1 * num2

//     return abc;
// }

// var nestedFunc = func1();
// console.log(nestedFunc(2,5));


//function return a function called 'Closure'.

function test(){
    var x = 4;
    return function(){
        return ++x;
    }
}

var nestFunc = test();
console.log(nestFunc());        //5
console.log(nestFunc());        //?
// console.log(x);