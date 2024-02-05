function myFunction(a, b) {
  let ONE_HOUR = 60 * 60 * 1000;
  return Math.abs(a - b) <= ONE_HOUR;
}

console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
);
// Expected
// true

console.log(
  myFunction(new Date("2000/01/01 09:00:00"), new Date("2000/01/01 08:45:00"))
);
// Expected
// true
