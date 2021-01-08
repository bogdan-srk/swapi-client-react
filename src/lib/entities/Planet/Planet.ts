import { IPlanet, IPlanetData } from './Planet.types';
import { IPerson } from '../Person/Person.types';
import { Person } from '../Person/Person';

export class Planet implements IPlanet {
  readonly id: string;
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
  readonly people: IPerson[];

  constructor(data: IPlanetData) {
    this.id = Planet.getIdFromData(data);
    this.climate = data.climate;
    this.name = data.name;
    this.population = data.population;
    this.url = data.url;
    this.diameter = data.diameter;
    this.gravity = data.gravity;
    this.orbital_period = data.orbital_period;
    this.rotation_period = data.rotation_period;
    this.terrain = data.terrain;
    this.residents = data.residents?.map((url) => url.split('/').filter(Boolean).pop() || '');
    this.people = data.people?.map((personData) => new Person(personData)) || []
  }

  private static getIdFromData(data: IPlanetData): string {
    return data.url.split('/').filter(Boolean).pop() || ''
  }
}
