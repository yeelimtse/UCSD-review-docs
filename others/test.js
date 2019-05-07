for(var i=0;i<10;i++) {
    let a = i;              // scope
    setTimeout(function(){
        console.log(a);
    }, 1000);
}

// for(var i=0;i<10;i++) {
//     console.log(i);
//   }

obj = {
    name: "name",
    getName: function () {
        console.log("the name is " + this.name);
    }
}

var fn = obj.getName;
obj.getName();
var fn2 = obj.getName();
console.log("===");
fn();
fn2;


obj = {
    a:1,
    b:2
}
obj1 = {
    a:1,
    b:2
}
obj2 = {
    a:1,
    b:2
}

console.log(JSON.stringify(obj) == JSON.stringify(obj2))