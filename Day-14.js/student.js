// Task 3
const Person = require('./person1');

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  // Override the greet method to include the student ID
  greet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }

  getStudentId() {
    return `Student ID: ${this.studentId}`;
  }
}

module.exports = Student;

// Task 5
console.log(Person.genericGreeting());
