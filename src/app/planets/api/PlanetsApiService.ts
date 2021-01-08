import { IFetchPlanetsData } from './PlanetsApiService.types';
import { IPlanetData } from '../../../lib/entities/Planet/Planet.types';

class PlanetsApiService {
  readonly url: string;

  constructor() {
    this.url = 'https://swapi.dev/api/planets/';
  }

  fetchPlanets(page: number): Promise<IFetchPlanetsData> {
    const url = new URL(this.url);

    const params = { page: String(page) };
    url.search = new URLSearchParams(params).toString();

    return fetch(url.toString())
      .then((res) => res.json())
  };

  fetchPlanet(id: string): Promise<IPlanetData> {
    const url = new URL(`${this.url}${id}/`);

    return fetch(url.toString())
      .then((res) => res.json())
  };
}

export default new PlanetsApiService();
