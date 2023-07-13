

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