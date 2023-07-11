


// Hoisting in var keyword
console.log(a);
var a=100;

fun();
function fun(){
    console.log("Inside Fun");
}


// hoisting in let and const is done but we can't access the variable before initialisation due to dead temporal zone
console.log(b);
let b=100;

fun();
function fun(){
    console.log("Inside Fun");
}

