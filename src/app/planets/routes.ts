import { PlanetsContainer } from './Planets/Planets.container';
import { PlanetContainer } from './Planet/Planet.container';

export const PLANETS_PATH = '/';
export const PLANET_PATH = '/planets/:id';

const PlanetsRoutes = [
  { key: PLANETS_PATH, path: PLANETS_PATH, exact: true, component: PlanetsContainer },
  { key: PLANET_PATH, path: PLANET_PATH, exact: true, component: PlanetContainer },
];

export default PlanetsRoutes;
