
let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = {...user};


for(const item in newUser) {
  item === "name" 
    ? newUser[item] = "Paolo" 
    : null;
}



console.log(newUser);
console.log(user);