console.log("start");
setTimeout(function b(){
    console.log("Timeout function")
},0);

console.log("end");

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 5000)
{
    endDate = new Date().getTime();
}
console.log("While loop");