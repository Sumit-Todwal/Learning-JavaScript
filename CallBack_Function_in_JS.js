// setTimeout(function z(){
//     console.log("timer");
// },5000);


// function x(y){
//     console.log("X");
//     y();
// }

// x(function y(){
//     console.log("Y");
// });

function attachEventListener(){
let count = 0;
document.getElementById("ClickME").addEventListener("click",function xyz(){
    console.log("Button Clicked",++count)
});
}

attachEventListener();