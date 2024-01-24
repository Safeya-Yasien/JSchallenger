function myFunction(...arrays) {
  return a.concat(...arrays);
}

myFunction([1, 2, 3], [4, 5, 6]);
// Expected
// [1, 2, 3, 4, 5, 6]
