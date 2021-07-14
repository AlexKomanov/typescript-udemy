let oranges: number = 5;
let speed: string = "fast";
let hasDog: boolean = true;

let nothing: null = null;
let nothing_2: undefined = undefined;

//Built-in objects
let dateNow: Date = new Date();
console.log(
  dateNow.getDate() + "/" + dateNow.getMonth() + "/" + dateNow.getFullYear()
);

//Array
let colors: string[] = ["red", "yellow", "grey"];
for (let color of colors) {
  console.log("color => " + color + " of colors.");
}

for (let color in colors) {
  console.log(`color ${color} in colors`);
}

let numbers: number[] = [1, 2, 3];
let results: boolean[] = [true, false];

//Classes
class Car {}

let carInstance: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
  x: 15,
  y: 25,
};

console.log(point);

//Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const logTextMultipleTimes: (text: string, occurencies: number) => void = (
  text: string, occurencies: number
) => {
    for(let i = 1; i <= occurencies; i++){
        console.log(`${i}: ${text}`);
    }
};

logNumber(6);
logTextMultipleTimes("Alexander", 5);
