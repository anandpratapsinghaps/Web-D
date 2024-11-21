
//object creation
const person={
    name:"Hannah",
    age:20,
    isAdult:true
};

//prototype or prototypal inheritance
const p1=Object.create(person);
const p2=Object.create(p1);


const student = {
    name : "APS",
    age : 23,
    eng : 94,
    math : 99,
    phy : 98,

    //method
    getAvg(){
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${avg} is the avg marks of ${this.name}`);
    }
}



