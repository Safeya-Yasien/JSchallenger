// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
function myFunction(a, b) {
  return a < b ? a / b : a * b;
}

console.log(myFunction(10, 100));
// Expected
// 0.1
