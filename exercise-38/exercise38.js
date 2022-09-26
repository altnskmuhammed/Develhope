function printName(){
  let helloName = "Hello John";
  function inner(){
    return setTimeout(function(){
      console.log(helloName);
    },1000);
  }
  return inner;
}

let myName = printName();
myName();