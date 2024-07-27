// Task 1
function checkNum(num) {
    if (num < 0) {
      throw new Error("Negative numbers are not allowed.");
    }
    return "Number is positive or zero.";
  }
  
  function handleError() {
    try {
      let result = checkNum(-5);
      console.log(result);
    } catch (error) {
      console.error("Error caught:", error.message);
    }
  }
 handleError();
  
// Task 2
function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return numerator / denominator;
  }
  
  function handleDivision() {
    try {
      let result = divideNumbers(10, 0); 
      console.log("Result:", result);
    } catch (error) {
      console.error("Error caught:", error.message);
    }
  }
  
  handleDivision();

// Task 3
function TryCatchFinally() {
    try {
      console.log("In the try block.");
      throw new Error("An intentional error occurred.");
    } catch (error) {
      console.log("In the catch block.");
      console.error("Error caught:", error.message);
    } finally {
      console.log("In the finally block throws an error");
    }
  }
  
TryCatchFinally();

// Task 4
// class CustomError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = "CustomError";
//     }
//   }
  
//   function riskyOperation() {
//     let condition = true; 
//     if (condition) {
//       throw new CustomError("This is a custom error message.");
//     }
//     return "Operation successful.";
//   }
  
//   function handleError() {
//     try {
//       let result = riskyOperation();
//       console.log(result);
//     } catch (error) {
//       if (error instanceof CustomError) {
//         console.error("CustomError caught:", error.message);
//       } else {
//         console.error("Unexpected error caught:", error);
//       }
//     }
//   }
//   handleError();

// Task 5
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  
  // Function to validate user input
  function validateInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
      throw new ValidationError("Input must be a non-empty string.");
    }
    return "Input is valid.";
  }
  
  // Function to handle validation
  function handleInputValidation() {
    try {
      let userInput = ""; 
      let validationResult = validateInput(userInput);
      console.log(validationResult);
    } catch (error) {
      if (error instanceof ValidationError) {
        console.error("ValidationError caught:", error.message);
      } else {
        console.error("Unexpected error caught:", error);
      }
    }
  }
  handleInputValidation();
  
// Task 6
function randomPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5;
        if (isSuccess) {
          resolve("Promise resolved successfully!");
        } else {
          reject(new Error("Promise rejected due to random failure."));
        }
      }, 1000); 
    });
  }
  
  randomPromise()
    .then((message) => {
      console.log(message); 
    })
    .catch((error) => {
      console.error("Error caught:", error.message); 
    });
  
// Task 7
function randomPromise() {
    return new Promise((resolve, reject) => {
    
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5; 
        if (isSuccess) {
          resolve("Promise resolved successfully!");
        } else {
          reject(new Error("Promise rejected due to random failure."));
        }
      }, 1000); 
    });
  }
  async function handleAsyncOperation() {
    try {
      const result = await randomPromise();
      console.log(result);
    } catch (error) {
      console.error("Error caught:", error.message);
    }
  } 
  handleAsyncOperation();
  