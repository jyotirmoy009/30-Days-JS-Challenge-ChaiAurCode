// // for (let i = 1; i <=10; i++) {
// //     console.log(i);
    
// // }


// for (let i = 1; i <=10; i++) {
//     let b=5*i;
//     console.log(b);
// }

// // let a =10;
// // while (a>=1) {
// //     console.log(a);
// //     a--;
// // }

// let a=1;
// sum=0;
// while (a<=10) {
//     sum+=a;
//     a++
//     console.log(sum);
// }

// let num = 5;
// let factorial = 1;
// do {
//     factorial *=num;
//     num --;
// } while (num>=1);
// console.log(factorial);

let num = 5;
let factorial = 1;

for (let index = num; index > 1; index--) {
    factorial *=index;
    //console.log(factorial);    
}
console.log(factorial);


let rows = 5;
for (let i = 5; i >=1; i--) {
    let stars = "";
    // for (let j = -1; j <=i; j++) {
        for (let j = 1; j <=i; j++) //printing for column
            {        
        stars += "*";
        // console.log(stars); 
    }
    console.log(stars);
}

// let row = 5;
// for (let a = 1; a <= row; a++) {
//     let stars = ""
//     for (let b = 1; b <= row; b++) {
        
//         stars +="*"
//     }
//     console.log(stars);
// }

let row = 5;

for (let a = 1; a <= row; a++) {
    let stars = ""
    for (let b = 1; b <= a; b++) {
        
        stars += b + " "
    }
    console.log(stars);
}


// const Arr= [1,2,3,4,5,]
// const maxArr = Arr.reduce((acccumulator, currentValue) => 
//     Math.max(acccumulator, currentValue, -Infinity)
// )
// console.log(`Maximum value in the array ${maxArr}`);

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
const fruitCount =fruits.reduce((acccumulator, currentValue) => {
    acccumulator[currentValue] = (acccumulator[currentValue] || 0)+1;
    return acccumulator;
},{})
console.log(fruitCount);

