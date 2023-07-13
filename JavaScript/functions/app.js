

function add(x,y){
    let res=x+y;
    console.log(res);
}
add(4,5)



function sum(x,y){
    let res=x+y;
    return res
}
const result=sum(4,4);
console.log(result);

function Sum(x,y,z=0){
    return x+y+z;
}
console.log(Sum(1,2));