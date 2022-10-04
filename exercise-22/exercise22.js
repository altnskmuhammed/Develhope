let name = "muhammed";
let num = 25;
let bool = true;

switch ((name, num, bool)) {
  case typeof name === "string":
    console.log(name + " string");
  case typeof num === "number":
    console.log(num + " number");
  case typeof bool === "boolean":
    console.log(bool + " boolean");
}
