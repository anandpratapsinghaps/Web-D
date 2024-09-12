// const favMovie="avatar";
// let guess = prompt("Guess the movie");

// while((guess!=favMovie)&&(guess!="quit")){
//     guess=prompt("try again");
// }
// if(guess==favMovie){
//     console.log("sahi hai bhai");
// } else{
//     console.log("rehne de tere se nhi hoga");
// }


//practice questions

//delete all occurrences of num in arr
let arr = [1, 2, 3, 4, 5, 6, 3, 8];
let num = 3;
for(let i=0; i<arr.length; i++){
    if(arr[i] == num){
        arr.splice(i, 1);
    }
}
console.log(arr);

//count the no of digit in a number
let number = 123456;
let count = 0;
let copy = number;
while(copy > 0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);

//sum of digits
let nums = 123;
let sum = 0;
let n1 = nums;
while(n1 > 0){
    digit = n1%10;
    sum += digit;
    n1 = Math.floor(n1/10);
}
console.log(sum);

//factorial
let n = 7;
let fact = 1;
for(let i=1; i<=n; i++){
    fact *= i;
}
console.log(`The factorial of ${n} is ${fact}`);