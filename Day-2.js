// Day-2 (Operators)
// Activity 1: Arithmetic Operations
// Task 1 to 5
// Write a program to add,subtract,multiply,divide,remainder...

let firstNo = 10;
let secondNo = 6;
console.log("Add:", firstNo + secondNo);
console.log("Subtract", firstNo - secondNo);
console.log("Multiply:", firstNo*secondNo);
console.log("Divide:", Math.floor(firstNo/secondNo));
console.log("Remainder", firstNo%secondNo);

// Activity 2 : Assignment Operator
// Task 6
let numb = 30;
numb += 40;
console.log(numb);

// Task 7
let myNum = 20;
myNum -= 10;  // equal to x = x - 20 // Output - 10
console.log(myNum);
// Explanation for this two task 6 and 7 - 
// x ix initially 30 incase of add , than addition assignment: x += 30 adds 30 to x and assigns the result back to x same with sub too.

// Activity 3
// Task 8
let debaMarks = 80;
let rajMarks = 60;
result = debaMarks > rajMarks;
console.log(result);
result = debaMarks < rajMarks;
console.log(result);

// Task 9
let debaScore = 200;
let rajScore = 200;
result = debaScore >= rajScore;
console.log(result);
result = debaScore <= rajScore;
console.log(result);

// Task 10
let num1 = 20;
let num2 = '20';
let looseEquality = (num1 == num2)
console.log(looseEquality);
let strictEquality = (num1 === num2)
console.log(strictEquality);
// Explanation : loose equality checks for equality after converting both variables to a common type.
// but strict equality checks for equality without type conversion here no type conversion occurs as one is number another one is string.
// Loose equality coverts types to a common type before comparing values, where strict compare values and types without performing type conversion.

// Activity 4
// Task 14
let myNumb = -10;
let myresult = ( myNumb > 0) ? "positive" : (myNumb < 0) ? "negative" : "zero";
console.log("the number is:", myNumb,"and the result:", myresult);
// it checks the conditions one by one if first condition is true than positive else it check the second condition if its true than negative or else if both conditions false than is set to zero.

