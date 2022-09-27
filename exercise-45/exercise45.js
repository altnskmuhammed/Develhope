function Smartphone(brand , name , price){
  this.brand = brand;
  this.name = name;
  this.price = price;

}

let phone1 = new Smartphone("samsung" , "A50" , 3500);
let phone2 = new Smartphone("apple" , "11" , 5000);

console.log(phone1);
console.log(phone2);
