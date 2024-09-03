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



let color = "red";
if(color === "red"){
    console.log(`stop! signal is ${color}`);
}
if(color === "yellow"){
    console.log(`slow down! signal is ${color}`);
}
if(color === "green"){
    console.log(`bhag ja jaldi se! signal is ${color}`);
}

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