import { IPlanet } from '../../../../../lib/entities/Planet/Planet.types';

export enum PlanetActionTypes {
  FETCH_REQUEST = 'PLANET_FETCH_REQUEST',
  FETCH_SUCCESS = 'PLANET_FETCH_SUCCESS',
  FETCH_ERROR = 'PLANET_FETCH_ERROR',
}

export interface PlanetState {
  readonly loading: boolean
  readonly planet?: IPlanet
  readonly errors?: string
}
