// WE remove EventListeners when not in use because it consumes a lot of memory............
console.log("Start");
setTimeout(function cbT(){
    console.log("cbT function");
},0);
fetch("https://restcountries.com/v3.1/name/india").then(function cbF(){
    console.log("New Url");
});
console.log("End");
// promises and mutation observer runs in microtask queue which has high priority
//  and callback functions runs in callback/task queue.

// -----------*********** Promises only goes in microtask queue when only they resolved properly *************-------------- //