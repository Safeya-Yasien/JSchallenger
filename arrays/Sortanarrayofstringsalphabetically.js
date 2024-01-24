function myFunction(arr) {
  return arr.sort();
}

myFunction(["b", "c", "d", "a"]);
// Expected
// ['a', 'b', 'c', 'd']

myFunction(["z", "c", "d", "a", "y", "a", "w"]);
// Expected
// ['a', 'a', 'c', 'd', 'w', 'y', 'z']
