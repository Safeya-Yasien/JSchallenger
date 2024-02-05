function myFunction(a, b) {
  return a.getTime() === b.getTime();
}

console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
);
// Expected
// false
