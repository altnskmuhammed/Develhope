function sayHelloName(callback) {
  console.log("hello");
  callback();
}

function printName() {
  console.log("Muhammed");
}

sayHelloName(printName);
