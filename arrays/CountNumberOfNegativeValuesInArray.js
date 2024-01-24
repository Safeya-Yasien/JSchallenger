function myFunction(a) {
  return a.filter((e) => Math.sign(e) === -1).length;
}

console.log(myFunction([1, -2, 2, -4]));
// Expected;
// 2;

myFunction([0, 9, 1]);
// Expected;
// 0;

myFunction([4, -3, 2, 1, 0]);
// Expected;
// 1;
