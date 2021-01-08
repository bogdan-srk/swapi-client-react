import { ApplicationState } from '../../../../../lib/store';

export const selectPlanet = (state: ApplicationState) => state.planet.planet;
