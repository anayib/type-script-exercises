import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class User implements Mappable  { // implements means the class satisfies the Mappable properties
  name: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.name = faker.person.firstName('male');
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    }
  }

  markerContent() {
    return `
      User name: ${this.name}
    `
  }
}