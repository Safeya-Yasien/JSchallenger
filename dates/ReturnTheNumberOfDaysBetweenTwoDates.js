function myFunction(a, b) {
  return Math.abs((a.getTime() - b.getTime()) / 1000 / 60 / 60 / 24);
}

console.log(myFunction(new Date("2020-06-11"), new Date("2020-06-01")));
// Expected
// 10

console.log(myFunction(new Date("2000-01-01"), new Date("2020-06-01")));
