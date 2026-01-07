const radius = [1,2,3,4];

const area = function(radius){
    return Math.PI*radius*radius;
}
const circumference = function(radius){
    return 2*Math.PI*radius;
}
const diameter = function(radius){
    return 2*radius;
}

const calculate = function (logic){
    const output = [];
    for(let i=0; i<=3; i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(diameter));
console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));

Array.prototype.calculate = function (logic){
    const output = [];
    for(let i=0; i<=3; i++){
        output.push(logic(this[i]));
    }
    return output;
}
console.log(radius.calculate(area));

// This prototype method applies like the function calculate is available for all the arrays we see....