// interfaces help us create new types
// If I declare a funtion that calls an objetc not using interfaces, I will have 
// if we had to write other functions that also need to call the object we would need
// to repeat all the annotaton as we did in printCar fucntion definition for each function definition calling the object
/*
const oldCar = {
  name: "Ford 54",
  year: 54,
  broken: true,
}

const printCar = (car: {name: string; year: number; broken: boolean}): void => {
  console.log(`Name ${car.name} \n Year: ${car.year} \n Broken:${car.broken}`);
}

printCar(oldCar);
*/

// Interface serve as gatekeepers to check if a function with the type of the interface
// is receiving  arguments that match those types
// we will need object or classes that math the requirements of the interface set to a fucntion
// interfaces restrict access to functions, raising an error if the fucntion is call with arguments that dont
// satisfy the interface data types. 

//the resuse code approach is using interfaces
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string // defining a fucntion in the interface and its expected return value
}

const oldCar = {
  name: "Ford 54",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
}

const printCar = (car: Vehicle): void => {
  console.log(`Name ${car.name} 
    \n Year: ${car.year} 
    \n Broken:${car.broken}
    \n Summary: ${car.summary()} `);
}

printCar(oldCar); 
// typescript will check that the data types of each property of the object
// passed as an argument fulfils the data types set in the interface

// Interfaces could help us to reuse code ...

interface Reportable {
  summary(): string;
}
// now we can reuse the interface with any item not only vehicles

const printSummary =  (item: Reportable): void => {
  console.log(item.summary());
}

const beverage = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Color ${this.color}`
  }
};

// as beverage and oldCar has both a summary property they could both be reportable
// they could both use the Reportable interface

printSummary(oldCar);
printSummary(beverage);

// An object can implement both interfaces if its properties satisfy the interface requirements
interface Todo {
  id: number;
  name: string;
  completed: boolean;
}
 
interface Model {
  id: number;
}
 
const washDishes = {
  id: 20,
  name: 'Do the dishes',
  completed: false
};
//washDishes satisfy both interfaces

