// Task 3
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello! my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    updateAge(newAge) {
      if (newAge <= 0) {
        console.error("Age must be a positive number.");
        return;
      }
      this.age = newAge;
      console.log(`Updated age: ${this.age}`);
    }
     // Static method to return a generic greeting message
  static genericGreeting() {
    return "Hello! Welcome to the world of programming.";
  }
  }
  
  module.exports = Person;
  