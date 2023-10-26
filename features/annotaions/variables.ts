// Promitive values
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothungMuch: null = null
let nothing: undefined = undefined;
let now: Date = new Date();

// Arrays
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Clases
class Car {}
let car: Car = new Car();

// Object literal
let point: {x:number; y: number} = {
  x: 10,
  y: 20
};

// Funtion
const logNumber: (i: number) => void  = (i) => {
  console.log(i);
}

// When to use anotations

// 1) When declaring functions that returns 'any' type

const json = '{"x": 10, "y": 20}'
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates) // {x: 20, y: 20}

/* 2) When we declare a variable on one line
and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord; // type any

for (let i = 0; i <= words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

right way down
*/

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i <= words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

/* 3) Variable whose type can not be infered
When we can have more than one type we use the OR | annotation
let numbers = [-10, -1, 12];
let numberAboveZero;
*/

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}