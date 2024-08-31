let todo= [];
let req=prompt("Enter your request");

while(true){
    if(req=="quit"){
        console.log("bhag ja bsdk");
        break;
    }
    if(req=="list"){
        console.log("------------");
        for(let i=0; i<todo.length; i++){
            console.log(i,todo[i]);
        }
        console.log("------------");
    }
    else if(req=="add"){
        let task = prompt("jo krna hai bta");
        todo.push(task);
        console.log("add kr diya");
    }
    else if(req=="delete"){
        let id=prompt("jo nhi kr paayega uski index bta");
        todo.splice(id,1);
        console.log("pta tha nhi kr paayega");
    }
    else{
        console.log("mtlb kuch bhi");
    }
    req=prompt("Enter your request");
}