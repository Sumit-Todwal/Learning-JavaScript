// function x(){
//     var i = 1;
//     setTimeout(function y(){
//         console.log(i);
//     },5000);
//     console.log("Hello INDIA");
// }
// x();

// function x(){
//     for(let i=1; i<=5; i++)
//     {
//         setTimeout(function y(){
//             console.log(i);
//         },i*1000)
//     }console.log("Hello INDIA");
// }
// x();

// we can do same things using var by making an function that passes different values
function x(){
    for(var i=1; i<=5; i++)
    {
        function close(x)
        {
            setTimeout(function y(){
                console.log(x);
            },x*1000);
        }console.log("Hello INDIA");
        close(i);
    }
}x();