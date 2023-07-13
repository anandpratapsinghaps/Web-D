

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


//default argument
function Sum(x,y,z=0){
    return x+y+z;
}
console.log(Sum(1,2));


// function expression
const square=function(n){
    return n * n;
}
console.log(square(5));

// arrow function implicit return
const cube=(n) => n*n*n;   //if there is only one argument we can remove () too
console.log(cube(5));


// hof(higher order function) --> we can function inside a function
function multiply2(num){
    return num*2
}

function a(b){
    const res=b(10);
        return res;
}
const ans=a(multiply2);
console.log(ans);