// Day-3 (Control Structures)
// Activity 1: If-Else statements
// Task 1 
let num = -2;
if (num>0) {
    console.log("positive",num);
} else if(num<0) {
    console.log("negative",num);
}else{
    console.log(num);
}

// Task 2
let age = 18;
if (age>=18) {
    console.log("Age is:", age, "Eligible to vote");
} else {
    console.log("Age is:", age, "Not Eligible to vote");
}

// Activity-2: Nested if-else Statements
//Task 3

let num1 = 10
let num2 = 20
let num3 = 40
let largest;
if (num1>num2 && num1>num3) {
    largest = num1;
} else if(num2>num1 && num2>num3){
    largest = num2;
}else if(num3>num1 && num3>num2){
    largest = num3;
}else{
    console.log("all are equal");
}
console.log("the largest number among",num1,num2,num3,"is",largest);

// Activity 3: Switch Case
// Task 4
let day = 6;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Unknown Day");
        break;
}

// Task 5
let score = 85;
switch (true) {
    case (score>=90):
        console.log("A");
        break;
   case (score>=75):
        console.log("B");
        break;
   case (score>=60):
        console.log("C");
        break;
    case (score>=50):
        console.log("D");
        break;
    default:
        console.log("F");
        break;
}

// Activity 4: Conditional(Ternary) Operator
// Task 6

let myNum = 2;
let condition = (myNum %2 === 0)?"even":"odd"
console.log(condition);

// Activity 5: Combining Conditions
// Task7

let year = 2024
if ((year%4===0) && (year%100 !=0) || year%400 === 0) {
    console.log(year,"is a leap year");
} else {
    console.log(year,"is non-leap year");
}
