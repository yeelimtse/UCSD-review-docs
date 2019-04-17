for(var i=0;i<10;i++) {
    let a = i;              // scope
    setTimeout(function(){
        console.log(a);
    }, 1000);
}

// for(var i=0;i<10;i++) {
//     console.log(i);
//   }
  