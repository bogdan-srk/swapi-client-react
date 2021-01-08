import { IPlanet } from '../../../../../lib/entities/Planet/Planet.types';

export enum PlanetsActionTypes {
  FETCH_REQUEST = 'PLANETS_FETCH_REQUEST',
  FETCH_SUCCESS = 'PLANETS_FETCH_SUCCESS',
  FETCH_ERROR = 'PLANETS_FETCH_ERROR',
  INCREMENT_PAGE = 'PLANETS_INCREMENT_PAGE',
  RESET_STATE = 'PLANETS_RESET_STATE',
}

export interface PlanetsState {
  readonly loading: boolean
  readonly planets: IPlanet[]
  readonly count: number
  readonly page: number
  readonly errors?: string
}
