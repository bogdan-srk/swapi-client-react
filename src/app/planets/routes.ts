import { PlanetPageContainer } from './pages/PlanetPage/PlanetPage.container';
import { PlanetsPageContainer } from './pages/PlanetsPage/PlanetsPage.container';

export const PLANETS_PATH = '/';
export const PLANET_PATH = '/planets/:id';

const PlanetsRoutes = [
  { key: PLANETS_PATH, path: PLANETS_PATH, exact: true, component: PlanetsPageContainer },
  { key: PLANET_PATH, path: PLANET_PATH, exact: true, component: PlanetPageContainer },
];

export default PlanetsRoutes;
