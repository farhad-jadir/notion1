// 1
let carName = "Volvo";

// 2
let firstName = "John";  // write variable name
let lastName = "Doe"; // write variable values 
let age = 35; // write variable name and values both

// 3
x = 10;
y = 5;
x *= y; // value of x is now 50

// 4
let length = 16; // data type: number
let lastName = "Johnson"; // data type: string

const x = {
firstName: "John",  
lastName: "Doe"
}; // data type: object


// 5
 
 function myFunction() {
  alert("Hello World!");
}

// call the function and see the output. Output is Hello World.

// 6

const person = {
    name: "John",
    age: 50
    };
    alert(person.name + " is " + person.age);

// 7

<button onclick="myFunction()">Click me.</button>

<script>
function myFunction() {
alert("Button clicked!");
}
</script>
// 8

// i
const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

// ii
const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";
console.log(Brand);

// 9

// Random Number

const randomNumber = Math.random() * 10;
console.log(randomNumber);

// Largest Number

let largestNumber = Math.max(10, 20);
console.log(largestNumber);

// SquareRoot
let squareRoot = Math.sqrt(9);
console.log(squareRoot);

// 10

// i

let x = 10;
let y = 5;

if (x > y) {
alert(true);
}

// ii

let age = 17; // You can change this value to test different ages
let message = (age < 18) ? "Too young" : "Old enough";
alert(message);