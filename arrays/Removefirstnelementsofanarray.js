function myFunction(a) {
  return a.slice(3);
}

myFunction([1, 2, 3, 4]);
// Expected
// [4]

myFunction([5, 4, 3, 2, 1, 0]);
// Expected
// [2,1,0]

myFunction([99, 1, 1]);
// Expected
// []
