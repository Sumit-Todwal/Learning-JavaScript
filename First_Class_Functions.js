// Function Statement aka function declaration
function a(){
    console.log("a is called");
}


//  Function Expression
var b = function (){
    console.log("b is called");
}
a();
b();
// console.log(b);
// console.log(b());  // Here b return undefined hence it prints it.....
// The Major difference between function statement and function Expression is HOISTING....

// Function Name Expression
var b = function xyz(){
    console.log(xyz);
}
b();
xyz();  // Not defined because it is not in global space or scope.....

// ............................FIRST CLASS FUNCTIONS................................................... //
// We can Pass function inside another function as an argument is called first class function
// The ability to pass function inside another function as values is known as first class functions and can be returned out of another functions.
var c = function (param1){
    console.log(param1);
}
var d = function (){
    return function cool(){
        console.log("Java");
    }
}

console.log(d());