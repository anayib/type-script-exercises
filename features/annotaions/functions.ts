// type annotations for fucntions
const add = (a: number, b: number): number => {
  return a + b;
};

// if the return value data type is not specified, typescript can infer it from the values of the arguments
// nevertheless is recommended to add the return value annotation like shown in the previous example, because we
// could make a mistake inside the function and return something unexpected and we wont realize

const add2 = (a: number, b: number) => {
  return a + b;
};

// Annotaions on functions declared with the "function" word

function divide(a: number, b: number): number {
  return a/b;
};

// Annotations on annonimous fucntions
const multiply = function(a: number, b: number): number {
  return a*b;
};

// A return annotation to a function that does not return something (could return undefined or null) should be set
// to void. The following function does return undefined so the return value type is set to void

const logger = (message: string): void => {
  console.log(message);
}

// Set an anotation to a function that does not get to the return statement. One example is a fucntion that 
// returns an error. In this case the type set to the return value is never. 

const throwError = (message: string): never => {
  throw new Error(message);
}

// in the case we would reach the end of the fucntion and return a value, it should set the proper data type
// expected to be returned from the function. 

const throwError1 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  };

  return message;
};

// destructuring 
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};
/*
Without destructuring
const logWeather = (todaysWeather: {date: Date, weather: string}): void => {
  console.log(todaysWeather.date);
  console.log(todaysWeather.weather);
};
*/

// destructuring the properties of the object passed as an argument
const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
};




