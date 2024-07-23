// Activity 1
// Task 1
const name = "Jyotirmoy";
const age = 21;
const greet = `Hello Everyone!, My name is ${name} and I am ${age} years old`
console.log(greet);

// Task 2
const multilineString = `
This is a multi line string.
My name is Jyotirmoy Kashyap. I love web development end to end deployment.
I am a Software Engineer.`
console.log(multilineString);

// Task 3
const numbers = [1,2,3,4,5,6]
const[first, second] = numbers;
console.log("First Element", first);
console.log("Second Element", second);

// Task 4
const book = {
    title: "Assam Year Book",
    author: "Sanatanu Kausik Baruah",
    year: 2021,
}
const{title, author} = book;
console.log("Title:", title);
console.log("Author:", author);

// Task 5
const array = [2,4,6,8,10]
const newArray = [...array, 12, 14, 16]
console.log(newArray);

// Task 6
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0)
}
const result = sum(1,2,3,4,5)
console.log(result);

// Task 7
function multiply(a, b=1) {
    return a*b;
}
const firstvalue = multiply(5,4)
console.log("Value with both parameters:", firstvalue);
const secondValue = multiply(9)
console.log("Value with one parameter:", secondValue);

// Task 8
const person = {
    name : "Jyotirmoy",
    age : 21,
    greet(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    },
    Birthday(){
        this.age += 1;
        return `Happy Birthday, ${this.name}! You are now ${this.age} years old`
    }
}
console.log(person);
console.log(person.greet());
console.log(person.Birthday());

// Task 9
const firstName = "firstName"
const lastName = "lastName"

const Person = {
    [firstName] : "Jyotirmoy",
    [lastName] : "Kashyap",
    position : "Software Engineer",
    age : 21
}
console.log(Person);