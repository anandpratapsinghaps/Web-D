

// Implicit Binding
const obj={
    name:"Hannah",
    age:20,
    sayname:function(){
        console.log(this);
    },
    favcolor:{
        color:"blue",
        saycolor:function(){
            console.log(this);
        }
    }
};

//explicit method
function fun(name,age){
    console.log(name);
    console.log(age);
    console.log(this);
}
const a={
    m:"hello",
    n:10
}
fun('Hannah',20)
fun.call(a,'Hannah',20);
