// Task 2
// personModule.js
const person = {
    name: "Jyotirmoy",
    age: 21,
    greet() {
      console.log(`Hello! my name is ${this.name} and I am ${this.age} years old.`);
    },
    celebrateBirthday() {
      this.age += 1;
      console.log(`I am now ${this.age} years old.`);
    }
  };
  
  module.exports = person;
  