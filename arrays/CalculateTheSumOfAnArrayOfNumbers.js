function myFunction(a) {
  return a.reduce((prev, curr) => prev + curr);
}

console.log(myFunction([10, 100, 40]));
// Expected
// 150

myFunction([10, 100, 1000, 1]);
// Expected
// 1111

myFunction([-50, 0, 50, 200]);
// Expected
// 200
