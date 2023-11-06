var y=function (){
    console.log("inside fun");
    var a = 30;
    return a;
}

var p=y;
var q=y();
var r=q();
console.log(p);
console.log(q);
console.log(r);