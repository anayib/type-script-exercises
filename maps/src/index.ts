/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);
/*
File to: create a new user or company and access its properties. Create a map and add marker to it
*/