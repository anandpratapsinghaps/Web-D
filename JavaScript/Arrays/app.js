

// filter method
const isOdd=(num) =>{
    if(num%2!==0){
        return true;
    }
    return false;
}
const arr=[1,2,3,4,5,6,7,8,9];

const oddnums=arr.filter(isOdd);
console.log(arr);
console.log(oddnums);

// map method

const square=num => num*num;
const Arr=[1,2,3,4,5,6,7,8,9];
const sqnum=Arr.map(square);
console.log(Arr);
console.log(sqnum);


// reduce method
const ar=[1,2,3,4,5,6,7,8,9]
const sum=ar.reduce((prev,curr)=>prev+curr);
console.log(ar);
console.log(sum);

// sort method
const arry=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
arry.sort((a,b)=>a-b);  //for aesc a-b and for desc b-a
console.log(arry);