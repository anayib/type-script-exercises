// Classes are blueprints to create objects
// To represent an object form the world define a list of values (fields - properties) and methods (actions)
// Creating classes will allow you to create several instances of those objects that have shared propeties and behavior
/*
class Vehicle {
  drive(): void {
    console.log(`driving ...`);
  };

  honk(): void {
    console.log(`honking ...`);
  }
};

const ford = new Vehicle();
ford.drive();
ford.honk();

// inheritance

class Car extends Vehicle {
  drive(): void {
    console.log('beep from Car'); // overwrite the inherited method from Vehicle
  }
};
const myCar = new Car();
myCar.drive();
myCar.honk();
*/

// Modifiers are keywords to be placed inside a class to restric access to the methods of the class
// public (a method can be called any where any time), 
// private (a method can only be called by other methods of the Class)
// protected (a method can be called by other methods of the Class or other methods in child classes)
// mofidiers apply to methods as wel as to properties/values of the class

class Transport {
  constructor(public color: string) {}; // variables that would be properties of the instance. When using the modifier public with be assign in the other the parametters are passed at the instantiation

  public honk(): void {
    console.log(`honking ...`);
  }
};

const ford = new Transport('red');
ford.honk();

// inheritance

class Car extends Transport {
  constructor(public wheels: number, color: string){
    super(color);
  }

  private drive(): void {
    console.log('beep from Car'); // overwrite the inherited method from Vehicle
  }

  public startDriving(): void {
    this.drive();
  }
};
const myCar = new Car(4,'orange');
myCar.startDriving();
myCar.honk();