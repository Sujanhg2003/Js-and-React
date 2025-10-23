/// var--> function scoped
/// let --> block scope

function Var_example() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log("Inside block x=>", x);
  }
  console.log("Outside block x=>", x);
}

Var_example();

let x = {};
console.log(typeof x);

// for in used for objects
let person = { name: "Amit", age: 25 };
for (let key in person) {
  console.log(key, ":", person[key]);
}

// for of used for iterators.
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// object
let student = {
  name: "Sujan",
  age: 22,
  course: "JavaScript",
};

// object to JSON
let jsonStr = JSON.stringify(student);
console.log("json:", jsonStr);
console.log("object:", student);

//Function factory --> retuns object every time when it called.
3;
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hi, I’m ${this.name}`);
    },
  };
}

let p = createPerson("Sujan", 25);
p.greet();
