import { ApplicationState } from '../../../../lib/store';
import { IPlanet } from '../../../../lib/entities/Planet.types';

export const selectPlanetsPage = (state: ApplicationState): number => state.planets.page;

export const selectPlanetsCount = (state: ApplicationState): number => state.planets.count;

export const selectPlanets = (state: ApplicationState): IPlanet[] => state.planets.planets;
