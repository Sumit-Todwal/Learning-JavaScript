function a(){
    var b = 5;
    console.log(b);
    c();
    function c(){
        var b = 10;
        console.log(b);
    }
}
a();
console.log(a);