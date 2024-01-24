function myFunction(arr) {
  return arr.every((e) => e === arr[0]);
}

console.log(myFunction([true, true, true, true]));
// Expected
// true

myFunction(["test", "test", "test"]);
// Expected
// true

myFunction([1, 1, 1, 2]);
// Expected
// false

myFunction(["10", 10, 10, 10]);
// Expected
// false
