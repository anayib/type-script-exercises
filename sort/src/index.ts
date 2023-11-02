import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numberCollection = new NumbersCollection([86, 33, -2, -5, 16, 0]);  
const mySort = new Sorter(numberCollection)
mySort.sort();
console.log(numberCollection)


/*
First implementation not optimal to handle different data types of collections

class Sort {
  constructor(public collection: number[]) {}

  sort(): void {
    const {length} = this.collection;

    for (let i = 0; i < length; i ++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j+1];
          this.collection[j+1] = leftHand;
        }
      }
    }

    console.log(this.collection)
  }
}

const mySort = new Sort([86, 33, -2, -5, 8, 0])
mySort.sort();

*/
// Type Guards
// instanceof values created with a constructor function 
//    {a: 1} instanceof Object // true
//    [1, 2, 3] instanceof Array // true  
// typeof  to get the type of primitive types -> number, string, boolean, symbol
//    typeof 'hola' === 'string' // true
//    typeof 4 === 'number' // true