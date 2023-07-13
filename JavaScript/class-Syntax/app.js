

class car{

    constructor(name,price,isDiskBrake){
        this.name=name;
        this.price=price;
        this.isDiskBrake=isDiskBrake;
    }
    //normal method
    startcar(){
        console.log(`Starting the car ${this.name}`);
    }

    // getter
    get getname(){
        return this.name;
    }

    //set
    set setprice(updatedprice){
        this.price=updatedprice;
    }
}

const c1=new car('BMW',1000000,true);


