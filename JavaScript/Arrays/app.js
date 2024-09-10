let arr = [7, 9, 0, -2];
let n = 3;
console.log(arr.slice(0,3));
console.log(arr.slice(arr.length - n));

let str = "abc";
if(str.length != 0){
    console.log("not blank");
} else{
    console.log("blank");
}

let s = "Hello World"
let idx = 6;
if(s[idx] == s[idx].toLowerCase()){
    console.log("yes");
} else{
    console.log("No");
}

// let st = prompt("Enter the String");
// console.log(`Original String ${st}`);
// console.log(`String without spaces ${st.trim()}`);

let array = [1,2,3,45,-2,4,'avf','a'];
let i = 2;
if(array.indexOf(i) != -1){
    console.log("yes");
} else{
    console.log("No");
}