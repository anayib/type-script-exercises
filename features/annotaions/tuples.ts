// tuples is a data strcuture similar to an array that allows 
// to set specific data types to specific index of the array

// object representation
const drink = {
  color: 'black',
  carbonated: true,
  sugar: 40
}

// Annotation to set a tuple data type
// const pepsi: [string, boolean, number] = ['black', true, 40]
// it can also be set at varible definition as a type
type Drink = [string, boolean, number];
const pepsi: Drink = ['black', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// Not used very ofte, ej

const carSpecs: [number, number] = [400, 4980]; // we have no idea what each number refer to but ..

const carDetails = {
  horsepower: 400,
  weight: 4980,
}
// using an object is better
// use objects instead of tuples