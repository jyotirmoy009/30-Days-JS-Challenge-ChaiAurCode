// Day 5: Functions
// Activity 1: Function Declaration
// Task 1
function evenOdd(number) {
    if (number%2 === 0) {
        console.log(number,"is an even number");
    } else {
        console.log(number,"is a odd number");
    }
}
evenOdd(5);
evenOdd(4);

// Task 2
function square(number) {
    const result =  number * number;
    console.log("Square of",number,"is",result);
    return result;
}
square(5);

// Activity 2: Function Expression
// Task 3
function maxNum(num1, num2){
    if (num1 > num2) {
        console.log(num1,"is greatest");
    } else if(num2 > num1) {
        console.log(num2,"is greatest");
    }else{
        console.log("Both are equal");
    }
}
maxNum(2,6)

// Task 4
let a = ["Parthiv", "Deba", "Raj"]
let b = ["Jyotirmoy"]
console.log(a.concat(b));

// Activity 3: Arrow Function 
// Task 5
let sum = (num1, num2) => {
if (typeof num1 != 'number' || typeof num2 != 'number') {
    return 'Both arguments must be numbers'
} else {
    return num1 + num2
}  
}
console.log(sum(5,9));
console.log(sum(5,'5'));
console.log(sum('5','5'));

// Task 6
const containsChar = (str, char) => {
    if (typeof str !== 'string' || typeof char !== 'string')   {
        return false;
    } else {
        return str.includes(char)
    }
}
console.log(containsChar('Jyotirmoy','y'));
console.log(containsChar('Jyotirmoy','k'));
console.log(containsChar('Jyotirmoy','j'));
console.log(containsChar('Jyotirmoy','5'));


// Activity: Function Parameter and Default Values
// Task 7
let product = (num1, num2 = 1) => num1 * num2;
console.log(product(9));

// Task 8
const greeting = (name, age = 21) => console.log("Hello",name, "Welcome! You are", age, "years old");
greeting('Jyotimoy')


// Activity 5: Higher-Order Functions
// Task 9
let greetingTimes = (func, times) => {
for (let index = 0; index < times; index++) {
    func()
}
}
let greet = () => console.log("Welcome!");
greetingTimes(greet, 4)

// Task 10
let myFunc = (func1, func2, value) => {
    return func2(func1(value))
}

function square(x){
    return x ** 2;
}
function cube(x){
    return x ** 3;
}

let results = myFunc(square, cube, 2)
console.log(results); // Output: 64 //cube(square(3)) = cube(4)