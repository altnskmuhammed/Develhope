
function printName() {
  console.log("Muhammed");
}

function sayHelloName(callback) {


  setTimeout(function(){
    console.log("hello");
    callback();
  },1000);

  
}


sayHelloName(printName);
