// Task 7

class Person2 {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    greeting() {
      return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }

    static genericGreeting() {
      return "Hello! Welcome to the world of programming.";
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  module.exports = Person2;
  