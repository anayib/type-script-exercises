// interface Sortable {  
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
//   length: number;
// }

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const {length} = this;

    for (let i = 0; i < length; i ++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j+1)) {
          this.swap(j, j+1)
        }
      }
    }
  }
}

/*
abstract clases are clases implementations that dont create object instances
they expose methods that could be extended to other methods. 
To achieve this you need to declare the porpoerties that would be manipulated in its methods
even if those properties belong to other methods (example above compare, swap, length) - those 
properties are known as members

As we implemented an abstract class we dont need anymore the interface
Interfaces ans classes are both used to implement contracts( the requisite of validating properties and their tyopes)
between different classes. 
An abstract class is more use to inherit methods from the abstract class - parent - to child classes. This is really strongly coupled

In TypeScript, both interfaces and abstract classes are used to define contracts for classes, but they serve different purposes and have distinct characteristics.

Abstract Class:

Abstract classes can have both abstract (unimplemented) and concrete (implemented) methods.
They can also have properties and fields.
Abstract classes can serve as a base class for other classes.
You can use the extends keyword to derive from an abstract class.
A derived class can inherit both the structure and implementation of an abstract class.
Interface:

Interfaces define the structure of an object, specifying only the method signatures (function names and their parameter lists) and properties (their names and types).
They do not include any implementation details, such as method bodies.
Classes can implement multiple interfaces.
Interfaces are primarily used for ensuring that classes adhere to a specific contract or structure.
Here's an example illustrating the difference:

typescript
Copy code
// Abstract class
abstract class Vehicle {
  // Abstract method
  abstract drive(): void;

  // Concrete method
  honk() {
    console.log("Honk honk!");
  }
}

// Concrete class that extends the abstract class
class Car extends Vehicle {
  drive() {
    console.log("Car is being driven.");
  }
}

// Interface
interface Drivable {
  drive(): void;
}

// Class that implements the interface
class Bicycle implements Drivable {
  drive() {
    console.log("Bicycle is being pedaled.");
  }
}

// Usage
const myCar = new Car();
myCar.drive(); // Output: "Car is being driven."
myCar.honk();  // Output: "Honk honk!"

const myBicycle = new Bicycle();
myBicycle.drive(); // Output: "Bicycle is being pedaled."

*/
