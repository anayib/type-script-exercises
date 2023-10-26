const profile = {
  firstName: 'Alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
}
// if you want to use destructuring you have to set the structure of the object
const {age}: { age: number} = profile; 
// : {age: number} set the expected data type to be returned from the variable destructure for the object
const {firstName}: {firstName: string} = profile; 
//
const { 
  coords: {lat, lng} } 
  : { coords: {lat: number, lng: number}} = profile;