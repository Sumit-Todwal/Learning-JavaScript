var a = 56;
{
    var a = 10; // Shadowing of a
    let b = 6;
    const c = 9;
    console.log(a); // Changes value in global space
    console.log(b);
    console.log(c);
}
console.log(a); // Global SCOPE
// console.log(b); Not accessed here
// console.log(c); Not accessed here
