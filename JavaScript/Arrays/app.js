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


let Arr = [1,2,3,45,3,2,52,5,643,35,645];

let max = Arr.reduce((max, el) => {
    if(max < el){
        return el;
    } else {
        return max;
    }
});
console.log(max);


// Square and sum the array elements using the arrow function and then find the
//  average of the array

let arr1 = [1, 2, 3, 4];
const sq = arr1.map((el) => el*el);
console.log(sq);
const sum = sq.reduce((res, e) => res + e);
console.log(sum/arr.length);

// Create a new array using the map function whose each element is equal to the
//  original element plus 5
let arr2 = [1, 2, 3, 4];
const resArr = arr2.map((element) => element + 5);
console.log(resArr);

// Create a new array whose elements are in uppercase of words present in the
//  original array.
let OriginalArr = ["abc", "def"];
const newArr2 = OriginalArr.map((str) => str.toUpperCase());
console.log(newArr2);