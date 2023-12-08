// var y=function (){
//     console.log("inside fun");
//     var a = 30;
//     return a;
// }

// var p=y;
// var q=y();
// var r=q();
// console.log(p);
// console.log(q);
// console.log(r);

function outer(){
    var money=50;
    function inner(){
        money++;
        var a=10;
        function innermost(){
            money++;
            a++;
            console.log('money=',money,'a=',a);
        }
        return innermost;
    }
    return inner;
}
var fun=outer();
var x=fun();
var y=fun();
x();
x();
x();
y();
y();
x();