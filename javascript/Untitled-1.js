var a=2;
function something(){
    var a=2;
    function another(){
        var a=3;
    }
}
debugger
something();
console.log(a)
//async(a,callback())

Promise.all([cleanRoom(),removeGarbage()])
