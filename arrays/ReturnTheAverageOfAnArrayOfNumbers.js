function myFunction(arr) {
  return arr.reduce((prev, curr) => prev + curr) / arr.length;
}

console.log(myFunction([10, 100, 40]));
// Expected
// 50
myFunction([10, 100, 1000]);
// Expected
// 370
myFunction([-50, 0, 50, 200]);
// Expected
// 50
