function printName(){
  let helloName = "Hello John";
  function inner(){
    return console.log(helloName);
  }
  return inner;
}

let myName = printName();
myName();