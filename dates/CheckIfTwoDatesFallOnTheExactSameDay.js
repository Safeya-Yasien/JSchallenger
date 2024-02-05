function myFunction(a, b) {
  return (
    Math.abs(a.getTime() / 1000 / 60 / 60 / 24) ===
    Math.abs(b.getTime() / 1000 / 60 / 60 / 24)
  );
}

console.log(myFunction(new Date("2000/01/01"), new Date("2000/01/01")));
// Expected
// true
