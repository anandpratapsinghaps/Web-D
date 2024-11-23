const { clearCache } = require("ejs");

function rollDice(){   //function definition
    let num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
}
rollDice(); //function calling

function calAvg(a, b, c){
    let avg = (a + b + c) / 3;
    console.log(avg);
}
calAvg(2, 3, 4);

//print table
function table(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}
table(2);

function sumOfn(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum += i;
    }
    return sum;
}

//higher order function

//takes multiple function as arg
function multiplegreet(fun, count){
    for(let i=1; i<=count; i++){
        fun();
    }
}
let greet = function(){
    console.log("hello");
}
multiplegreet(greet, 10);


//return a function
let OddOrEven = function(request){
    if(request == 'odd'){
        return function(n){
            console.log(!(n % 2 == 0));
        }
    } else if(request == 'even'){
        return function(n){
            console.log(n % 2 == 0);
        }
    } else{
        console.log("wrong request");
    }
}

//practice ques

let arr = [2, 3, 4, 5, 7, 8 ,3, 2];
let num = 7;

function getLargerNum(arr, nmu){
    for(let i=0; i<arr.length; i++){
        if(arr[i] > num){
            console.log(arr[i]);
        }
    }
}
getLargerNum(arr, num);


let str = "weihfiwvuvbaiojdiawjac";

function getUnique(str){
    let ans = "";
    for(let i=0; i<str.length; i++){
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1){
            ans += currChar;
        }
    }
    return ans;
}
console.log(getUnique(str));



//arrow function

const sum = (a, b) => {
    return (a+b);
};

const cube = n => {
    return n*n*n;
};

const mul = (a,b) => (a*b);


//set time out

console.log("Hey!");
setTimeout( () => {
    console.log("How are u ?");
}, 4000);
console.log("Buddy");

let id = setInterval(() => {
    console.log("Hello");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("cleared");
}, 10000);


const getAvg = (arr1) => {
    let total = 0;
    for(let num of arr){
        total += num;
    }
    return total / arr.length;
}

let arr1 = [2,4,5,6,7,8,12,14];
console.log(getAvg(arr));


let n = 4;
const isEven = (n) => n % 2 == 0;
console.log(isEven(n));