// Day-1 (Variables and datatypes)
// Activity 1: Variable Declaration
// Task 1 : Declare a variable using var, assign it a number and log the value to the console
// Task 2 : Declare a variable using let, assign it a string and log the value to the console

// Activity 2: Constant Declaration
// Task 3 : Declare a variable using const, assign it a boolean value and log the value to the console

// Activity 3 : Data Types
// Task 4 : Create variables of different data types (number, string, boolean, object, arrays) and log each variable's type using typeof operator

// Activity 4 : Reassigning Values
// Task 5 : Declare a variable using let, assign it an initial value, reassign a new value and log both values to the console

// Activity  5: Understanding const
// Task 6 : Try reassigning a variable declared with const and observe the error


// Activity 1 
// Task 1
var num = 9;
console.log(num);

// Task2
let name = 'Jyotirmoy';
console.log(name);

// Activity 3
// TAsk 3
const value = true;
console.log(value);

// Activity 3
// Task 4
let number = 5;
let string = 'Jyotirmoy'
let boolean = true;
let obj = {
    name : 'Jyotirmoy',
    username : 'jyotirmoy7754',
    age : 21
}
let array = [1,2,'true','shaktiman',5];
console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof obj);
console.log(typeof array);

// Activity 5
// Task 5

let firstValue = 10;
console.log(firstValue);
let secondValue = 20;
console.log(secondValue);

// Activity 6
// Task 6

const valueOne = 200;
// valueOne = 400;
console.log(valueOne); //error - TypeError: Assignment to constant variable.




// Feature Request :

// 1. Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
let x = 5
console.log("Value is:", x, "and type of :", typeof x);
let myBoolean = true;
console.log("Value is:", myBoolean, "and type of :", typeof myBoolean);

//2. Create a script that demonstrates the difference in behaviour between let and const  when it comes to reassignment
let myVar = 10;
console.log("Initial Value:" , myVar); //  Output : 10
myVar = 20;
console.log("Reassigned value:", myVar); // Output after reassigning: 20

const myConst = 30;
console.log("Initial Value:" ,myConst);
// myConst = 40; ----- // TypeError: Assignment to constant variable.

// Explanation of Feature Request Node. 2

// let allows us to declare a variable that can be reassigned but
// const does not allow us to declare a variable that cannot be reassigned.


