// function x(){
//     var a = 10;
//     function y(){
//         console.log(a);
//     }
//     a = 500;
//     return y;
// }
// var z = x();
// console.log(z);
// z();

function z(){
    var b = 900;
    function x(){
        var a = 56;
        function y()
        {
            console.log(a,b);
        }y();
    }x();
}
z();