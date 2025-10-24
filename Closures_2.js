function outest(){
    var c = 15;
    function outer(z){
        var b = 18;
        function inner(){
            console.log(a,b,z);
        }
        // let a = 12;
        return inner;
    }return outer;
}
let a = 500;
var close = outest()("Helloworld")
close();