import { IPlanet } from '../../../../lib/entities/Planet.types';

export enum PlanetsActionTypes {
  FETCH_REQUEST = 'PLANETS_FETCH_REQUEST',
  FETCH_SUCCESS = 'PLANETS_FETCH_SUCCESS',
  FETCH_ERROR = 'PLANETS_FETCH_ERROR',
  INCREMENT_PAGE = 'INCREMENT_PAGE',
}

export interface PlanetsState {
  readonly loading: boolean
  readonly planets: IPlanet[]
  readonly count: number
  readonly page: number
  readonly errors?: string
}
