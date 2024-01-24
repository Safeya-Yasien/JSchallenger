function myFunction(a, b) {
  return Array.from(new Set([...a, ...b])).sort((a, b) => a - b);
}

console.log(myFunction([1, 2, 3], [3, 4, 5]));
// [ 1, 2, 3, 4, 5 ]

console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));
// [ -11, -10, 5, 22, 41,  42, 333]
