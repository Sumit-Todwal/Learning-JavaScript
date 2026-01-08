const arr = [1,2,3,4,5];

function triple(x){
    return 3*x;
}


const output = arr.map(triple);
// console.log(output);

const newoutput = arr.map(function binary(x){
    return x.toString(2);
});
// console.log(newoutput);

const nextoutput = arr.map((x) => x.toString(2));
// console.log(nextoutput);

// Filter

const filtered = arr.filter((x) => x%2 === 0);
// console.log(filtered);

// Reduce
const reduceoutput = arr.reduce(function(acc,curr){
    acc += curr;
    return acc;
});
// console.log(reduceoutput);

const maxreduce = arr.reduce(function(acc,curr){
    if(acc < curr) acc = curr;
    return acc;
}, 0);
console.log(maxreduce);