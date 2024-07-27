// person.js

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    // Method to update the age and log the updated age
  updateAge(newAge) {
    if (newAge <= 0) {
      console.error("Age must be a positive number.");
      return;
    }
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
  }
}
  module.exports = Person;
  