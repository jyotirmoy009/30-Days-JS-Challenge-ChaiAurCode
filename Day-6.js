// Activity 1: Array Creation and Access
// Task 1
const Arr = [1,2,3,4,5];
console.log(Arr);


// Task 2
console.log(Arr[0]);
console.log(Arr[Arr.length-1]);

// Activity 2: Array Methods (Basic)
// Task 3
const myArr = [1,2,3,4,5,6];
myArr.push(9);
console.log("New Array:",myArr);

// Task 4
myArr.pop();
console.log("Removed the last element:", myArr);

// Task 5
myArr.shift();
console.log("Removed the first element:", myArr);

// Task 6
myArr.unshift(10);
console.log("Added a new element to beginning:", myArr);

// Activity 3: Array Methods (Intermediate)
// Task 7
const newArr = [2,4,5,6,7,8]
const updArr = newArr.map((number) => number * 2 ) 
console.log(updArr);
 
// Task 8
const evenArr = newArr.filter((data) => data%2 === 0);
console.log(`Array with only even numbers: ${evenArr}`);

// Task 9
const myArray = [1,2,3,4,5,6,7]
const sum = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(`Sum of array elements: ${sum}`);

// Activity 4: Array Iteration
// Task 10
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// Task 11
myArray.forEach(i => {
    console.log(i);
})

// Activity 5
// Task 12
const matrix = [      //  craeting a 2*4 matrix
    [1,2,3,4],
    [6,7,8,9]
];
console.log(matrix);

// Task 13
console.log(matrix[1][2]);  // accessing the elements at row index 1, column index 2