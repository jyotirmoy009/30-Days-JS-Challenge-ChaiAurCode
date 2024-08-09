// Day 4: Loops
// Activity 1: For Loop
// Task 1

for (let i = 1; i<=10; i++) {
    console.log("Printing Number",i);
}

// Task 2
for (let i = 1; i <=10; i++) {
    console.log("5 *",i,"=",5*i);
    
}

//Activity 2: While Loop
// Task 3
let sum = 0;
let i = 1;
while (i<=10) {
    sum +=i;
    i++
}
console.log("Sum of 1 to 10 numbers:", sum);

// Task 4
let index = 10;
while (index>=1) {
    console.log(index);
    index--;  
}

// Activity 3: Do...While Loop
// Task 5
let myNum = 1;
do {
    console.log("Printing Number", myNum);
    myNum++;
} while (myNum<=5);

// Task 6
let number = 5;
let factorial = 1;
let a = number;
do {
    factorial *= a;
    a--;
} while (a>0);
console.log("Factorial of 5!:", factorial);

// Task 7
for (let b = 1; b <= 5; b++) {
    let stars = "";
    for (let j = 1; j<= b; j++) {
        stars += "*";
    }
    console.log(stars);
}

// Task 8
for (let c = 1; c <= 10; c++) {
    if(c == 5){
    console.log("Skipped this number");
    continue;
}
    console.log(c);
}

// Task 9
for (let d = 1; d <= 10; d++) {
    if(d == 7){
        console.log("Stop the loop");
        break;
    }  
}
