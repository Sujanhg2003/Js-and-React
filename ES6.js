const add = (a,b)=> a+b;
console.log("Sum:",add(5,3));

let name = "Sujan"
let age=24;
let message = `Hi , my name is ${name} , ${age} years old.`
console.log(message);

//Destructing object

const user = {
    name1:"Ravi",
    age:25,
    city:"Mysuru"
};

const { name1,city } = user;
console.log(name1,city);

//Destructing Array

const colors = ["red","green","blue"];
const [first,,third] = colors;
console.log(first,third);

//Spread operator 

const arr1 = [1,2,3]
const  arr2 = [4,5]
const combined = [...arr1,...arr2];
console.log("Combined array :",combined);

// map, reduce and filters 
//map --> for transform ech item and retun new array

const doubled = arr1.map(num => num*2);
console.log("Doubled values :",doubled);

//filter  
const numbers = [1,2,3,4,5,6];
const evenNumbers = numbers.filter(num => num%2 ===0);
console.log("Even Numbers :",evenNumbers);

//Reduce -->reduce array to a single value (like Sum,avg..)
const num_1 = [10,20,30,40];
const total = num_1.reduce((prev,curr)=>prev + curr ,0); //0-> initial value
console.log("Total sum:",total);

const result = numbers.filter(num => num%2===0)
    .map(num => num*2)
    .reduce((sum,num)=>sum + num,0);
console.log("Result :",result);
