
function calculateArea(radius) {
    if (radius <= 0) {
      throw new Error("Radius must be a positive number.");
    }
    const PI = 3.14159;
    return PI * radius * radius;
  }
  
  module.exports = calculateArea;
  