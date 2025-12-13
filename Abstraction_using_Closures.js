// function Counter(){
//     var count = 0;
//     return function incrementcount(){
//         count++;
//         console.log(count);
//     }
// }
// var counter1 = Counter();
// counter1();

function Counter(){
    var count = 0;
    this.incrementcount = function(){
        count++;
        console.log(count);
    }
    this.decrementcount = function(){
        count--;
        console.log(count);
    }
}
var counter1 = new Counter();
var counter2 = new Counter();
counter1.incrementcount();
counter2.incrementcount();
counter1.incrementcount();
counter2.incrementcount();
counter1.incrementcount();
counter2.decrementcount();