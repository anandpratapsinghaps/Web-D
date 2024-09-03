// const { name } = require("ejs");

// let color = "red";
// if(color === "red"){
//     console.log(`stop! signal is ${color}`);
// }
// if(color === "yellow"){
//     console.log(`slow down! signal is ${color}`);
// }
// if(color === "green"){
//     console.log(`bhag ja jaldi se! signal is ${color}`);
// }

//nested if else
let marks = 89;
if(marks > 33){
    if(marks > 80){
        console.log("top kiya hai bhai n")
    } else{
        console.log("chal pass to ho gya");
    }
} else{
    console.log("fail ho gya hai bhai tu");
}

//switch
let signal = "Red";
switch(signal){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("go");
        break;
    default :
    console.log("bhag ja");            
}

// const age=parseInt(prompt("Enter your age"))
// if(age<18){
//     alert("nikal ja yaha se")
// }
// else if(age>=18 && age<25){
//     alert("aaja lekin peena mt")
// }
// else{
//     alert("ab kyahi bolu ja pee le bina piye toh manega nhi ")
// }

// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");
// console.log(`Hello ${firstName} ${lastName}`);
// let name = firstName + lastName;
// alert(name);


let num = 25;
if(num%10 == 0){
    console.log("good");
} else{
    console.log("bad");
}

let name = prompt("Enter your name");
let age = prompt("Enter your age")
alert(`${name} is ${age} year old`)


let s = "vbcede"
if((s[0] == 'A' || s[0] == 'a') && (s.length>5)){
    console.log("golden");
} else{
    console.log("not");
}

let n1 = 1;
let n2 = 2;
let n3 = 3;
if(n1>n2){
    if(n1>n3){
        console.log("n1");
    } else{
        console.log("n3");
    }
} else{
    if(n2>n1){
        if(n2>n3){
            console.log("n2");
        } else{
            console.log("n3");
        }
    }
}

// let n1 = 32;
// let n2 = 452;
// if(n1[n1.length-1]==n2[n2.length-1]){
//     console.log("same");
// } else{
//     console.log("not ");
// }
