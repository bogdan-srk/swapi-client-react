import { IPlanet, IPlanetData } from './Planet.types';

export class Planet implements IPlanet {
  readonly id?: string;
  readonly climate: string;
  readonly name: string;
  readonly population: string;
  // readonly residents: string[];
  readonly url: string;

  constructor(data: IPlanetData) {
    const id = Planet.getIdFromData(data);
    if (id) {
      this.id = id;
    }
    this.climate = data.climate;
    this.name = data.name;
    this.population = data.population;
    this.url = data.url;
  }

  private static getIdFromData(data: IPlanetData): string | undefined {
    return data.url?.split('/').filter(Boolean).pop()
  }
}
