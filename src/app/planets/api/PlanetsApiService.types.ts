import { IPlanetData } from '../../../lib/entities/Planet.types';

export interface IFetchPlanetsData {
  readonly count: number
  readonly next: string
  readonly previous: string
  readonly results: IPlanetData[]
}

export interface IFetchPlanetData {
  readonly name: string
  readonly rotation_period: string
  readonly diameter: string
  readonly climate: string
  readonly gravity: string
  readonly orbital_period: string
  readonly terrain: string
  readonly population: string
  readonly residents: string[]
  readonly url: string
}
