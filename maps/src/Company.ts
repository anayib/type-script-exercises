import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: string;
  cathPhrase: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.companyName =  faker.company.name();
    this.cathPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    }
  }

  markerContent() {
    return `
      <h2>Company Name: ${this.companyName}</h2>
      <h2>Company Phrase: ${this.cathPhrase}<h2>
    `
  }
}