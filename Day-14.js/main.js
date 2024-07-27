// Task 1
// main.js

const Person = require('./person');
const person = new Person('Raj', 25);

console.log(person.greet());

// Task 2
person.updateAge(28);

console.log(person.greet());

// Task 3
// main.js

const Student = require('./student');

const student = new Student('Raju', 21, 'XV12345');
console.log(student.greet());

// Task 4
console.log(student.getStudentId());

// Task 6
// main.js

const Person2 = require('./person2');
const persons = new Person('Raju', 'Sharma', 20);
console.log(`Full Name: ${persons.fullName}`);



