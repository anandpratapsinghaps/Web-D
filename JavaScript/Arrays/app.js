

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