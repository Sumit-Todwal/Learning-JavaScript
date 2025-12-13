function y(){
    var a = 10, x = 20;;
    return function p(){
        console.log(a);  // At here a is accessed but x is not in scope.....
        //  which is collected by garbage collector but a is remained by closures
    }
}
var z = y();
z();