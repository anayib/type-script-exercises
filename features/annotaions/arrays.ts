// HOw to set data types to the elements of an array
const cars = ['Toyota', 'Chevy', 'Ford']; // typescript set data types with inference
const cars2: string[] = ['Toyota', 'Chevy', 'Ford']; // explicitely setting the types with annotation
const cars3: string[] = [] // if the array is declared but not defined, always set the type
// two dimentional arrays
const carMakers: [][] = []; // defining a two dimensional array
const carMakers2: string[][] = [
  ['Toyota'],
  ['Chevy'],
  ['Ford'],
];
// arrays with multiple types
const importantDates = [new Date(), '23-10-1986']; // set the types with inference
const importantDates2: (Date | string)[] = [new Date(), '10-23-1986']; // explicitely set the type with annotation
importantDates2.push(new Date());
importantDates2.push('12-03-1989');
//importantDates2.push(false); trying to push a boolean will throw an error
// Tuples are a different data structure from Arrays in Typescript
// tuples ara simular in structure to arrays but each element represents a property of a record
// meaning a tuple represent a record and its elements represent properties of that record
// for instant, a record 'drink' could have properties 'color', 'carbonated', 'sugar'
// we represent a drink with a tuple where each element of this tuple represent one property of the drink
// to match the values of each properties the order of the elements matter otherwise we wont understand
// anymore which value in the tuple represents each property