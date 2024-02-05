let a = "Check if property exists in object and is truthy";

let words = a.split(" ");

// Capitalize the first letter of each word
let capitalizedWords = words.map(
  (word) => word.charAt(0).toUpperCase() + word.slice(1)
);

console.log(capitalizedWords.join(""));

