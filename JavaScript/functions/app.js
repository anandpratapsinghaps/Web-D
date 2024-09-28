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
function multiplegreet(fun, count){
    for(let i=1; i<=count; i++){
        fun();
    }
}

let greet = function(){
    console.log("hello");
}
multiplegreet(greet, 10);