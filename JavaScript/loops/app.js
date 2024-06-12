const favMovie="avatar";
let guess = prompt("Guess the movie");

while((guess!=favMovie)&&(guess!="quit")){
    guess=prompt("try again");
}
if(guess==favMovie){
    console.log("sahi hai bhai");
} else{
    console.log("rehne de tere se nhi hoga");
}