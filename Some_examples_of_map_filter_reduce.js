const users = [{firstName : "Sumit todwal", age : 22},{firstName : "Akshay kumar", age : 52},{firstName : "Merra", age : 28},{firstName : "Piyush", age : 22}];
const output = users.map((x) => x.firstName + " " + x.age);
// console.log(output);

const reduceoutput = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
}, {})
// console.log(reduceoutput);

const newfilteroutput = users.filter((x) => x.age<30).map(x => x.firstName);
// console.log(newfilteroutput);

const newreduceoutput = users.reduce(function(acc,curr){
    if(curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
},[])
console.log(newreduceoutput);