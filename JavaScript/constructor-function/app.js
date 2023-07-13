



function person(name,age){
    this.name=name;
    this.age=age;
    // console.log(this);
    // this.sayname=function(){
    //     console.log(this.name);
    // }
}

person.prototype.sayname=function(){
    console.log(this.name);
}
const p1=new person('Hannah',20);
const p2=new person('clay',20);








