// Task 1
// main.js
const add = require('./addNumber');

const num1 = 5;
const num2 = 7;
const sum = add(num1, num2);

console.log(`The sum of ${num1} and ${num2} is ${sum}.`);

// Task 2
// main.js
const person = require('./personModule');

person.greet(); 
person.celebrateBirthday();
person.greet(); //

// Task 3
// main.js
const { add3, subtract, multiply, divide } = require('./mathfunction');

const a = 10;
const b = 5;

console.log(`Add3: ${add3(a, b)}`);          
console.log(`Subtract: ${subtract(a, b)}`);
console.log(`Multiply: ${multiply(a, b)}`);
console.log(`Divide: ${divide(a, b)}`);    

// Task 4
// main.js
const calculateArea = require('./calcArea');

const radius = 5;

try {
  const area = calculateArea(radius);
  console.log(`The area of a circle with radius ${radius} is ${area}.`);
} catch (error) {
  console.error(error.message);
}

// Task 5
// main.js
const utilities = require('./allModule');

console.log(`Value of PI: ${utilities.PI}`);

const sums = utilities.adding(5, 3);
console.log(`Sum of 5 and 3: ${sums}`);

const product = utilities.multiply(4, 6);
console.log(`Product of 4 and 6: ${product}`);

const area = utilities.circleArea(5);
console.log(`Area of a circle with radius 5: ${area}`);

