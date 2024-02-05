function myFunction(a, b) {
  return (
    a.hasOwnProperty(b) && a[b] !== null && a[b] !== undefined && a[b] !== ""
  );
}

console.log(myFunction({ x: "a", b: "b", z: undefined }, "z"));
// Expected
// false

console.log(myFunction({ a: 1, b: 2, c: 3 }, "b"));
// Expected
// true
