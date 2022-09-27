
let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = {...user}; //  Object.assign({} , user) or JSON.parse(JSON.stringify(user))  3 method for coppy object


for(const item in newUser) {
  item === "name" 
    ? newUser[item] = "Paolo" 
    : null;
}



console.log(newUser);
console.log(user);