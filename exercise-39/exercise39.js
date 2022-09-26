function multiplyByTwo(value){
let number = 2;

function inner(){
  return console.log(value * number);
}
return inner;


}

let result = multiplyByTwo(5);
result();