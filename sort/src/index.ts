import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numberCollection = new NumbersCollection([86, 2345, -2, -5, 16, 0]);  
numberCollection.sort();
console.log(numberCollection.data)

const charactersCollection = new CharactersCollection('Xabzvcop');
charactersCollection.sort();
console.log(charactersCollection)

const linkedList = new LinkedList;
linkedList.add(100);
linkedList.add(20);
linkedList.add(40);
linkedList.add(-20);
linkedList.sort();
linkedList.print();


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