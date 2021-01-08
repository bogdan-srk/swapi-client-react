import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { PlanetsState } from '../../app/planets/pages/PlanetsPage/store/types';
import { PlanetState } from '../../app/planets/pages/PlanetPage/store/types';
import { planetsReducer } from '../../app/planets/pages/PlanetsPage/store/reducers';
import { planetReducer } from '../../app/planets/pages/PlanetPage/store/reducers';

export interface ApplicationState {
  planets: PlanetsState
  planet: PlanetState
}

export const createRootReducer = () =>
  combineReducers({
    planets: planetsReducer,
    planet: planetReducer,
  });

export const configureStore = (initialState: ApplicationState) => {
  const middlewares = [thunk];
  const composeEnhancers = composeWithDevTools({});
  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  return store
};
