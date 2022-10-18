
let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = {...user , name: "Paulo"}; //  Object.assign({} , user) or JSON.parse(JSON.stringify(user))  3 method for coppy object


console.log(newUser);
console.log(user);

