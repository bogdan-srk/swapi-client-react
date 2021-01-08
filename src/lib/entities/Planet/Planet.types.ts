import { IPerson, IPersonData } from '../Person/Person.types';

export interface IPlanetData {
  readonly climate: string;
  readonly name: string;
  readonly population: string;
  readonly url: string;
  readonly diameter?: string;
  readonly gravity?: string;
  readonly orbital_period?: string;
  readonly rotation_period?: string;
  readonly terrain?: string;
  readonly residents?: string[];
  readonly people?: IPersonData[];
}

export interface IPlanet extends IPlanetData {
  readonly id: string;
  readonly people: IPerson[];
}
