function myFunction(arr) {
  return arr.reduce((prev, curr) => (prev.length > curr.length ? prev : curr));
}

console.log(myFunction(["help", "me"]));
// Expected
// 'help'
myFunction(["I", "need", "candy"]);
// Expected
// 'candy'
