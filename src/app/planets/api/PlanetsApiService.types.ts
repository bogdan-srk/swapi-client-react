import { IPlanetData } from '../../../lib/entities/Planet/Planet.types';

export interface IFetchPlanetsData {
  readonly count: number
  readonly next: string
  readonly previous: string
  readonly results: IPlanetData[]
}
