import { IPlanetData } from '../../../../lib/entities/Planet.types';

export interface IFetchPlanetsData {
  readonly count: number
  readonly next: string
  readonly previous: string
  readonly results: IPlanetData[]
}

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
}

export default new PlanetsApiService()
