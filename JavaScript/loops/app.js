//for loop
for(let num=1;num<=10;num++){
    console.log(num);
}

for(let n=1;n<=10;n++){
    if(n==5){
        break;
    }
    console.log(n);
}
console.log("nhi chal rha kya...");


//while loop
let i=1;
while(i<=10){
    console.log(i);
    i++;
}


// for-of loop
const animals=['Dog','Lion','Cat','Aur tum..'];

for(let animal of animals){
    console.log(animal);
}