// Task 1
function createGreeting(greetingPrefix) {
    return function(name) {
      return `${greetingPrefix}, ${name}!`;
    };
  }
  
  const greetWithHello = createGreeting('Hello');
  
  console.log(greetWithHello('XvKashyap'));  
  
  // Task 2
 
function createCounter() {
    let counter = 0; 

    function increment() {
      counter += 1;
    }
    function getValue() {
      return counter;
    }
    return {
      increment,
      getValue
    };
  }
  
  const myCounter = createCounter();
  
  myCounter.increment();
  myCounter.increment();
  console.log(myCounter.getValue());  
  
  myCounter.increment();
  console.log(myCounter.getValue());  
  
  // Task 3
  // Function to create a unique ID generator
function createIdGenerator() {
    let lastId = 0; 
  
    function generateId() {
      lastId += 1; 
      return `ID-${lastId}`; 
    }

    return generateId;
  }
  
  const generateUniqueId = createIdGenerator();
  
  // Generate and log unique IDs
  console.log(generateUniqueId()); 
  console.log(generateUniqueId());
  console.log(generateUniqueId()); 
  