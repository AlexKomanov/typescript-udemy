//When to use type annotations
// 1. Function returns 'any' type
const jsonObj = '{"x": 20, "y": 25}';
const coordinates: { x: number; y: number } = JSON.parse(jsonObj);
console.log(coordinates);

// 2. Variable declaration and initialization at the different lines
let words = ["one", "two", "three"];
let isTwo: boolean; // <- originally was : let isTwo;

for (let word of words) {
  if (word === "two") {
    isTwo = true;
    console.log(isTwo.valueOf());
  }
}

// 3. Variables whose type can not be inferred
let myNumbers = [-1, 4, 50];
let positiveNumber: boolean | number = false;

for (let number of myNumbers) {
  if (number > 0) {
    positiveNumber = number;
  }
}
