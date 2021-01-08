import { PlanetsState } from '../../app/planets/pages/Planets/store/types';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { planetsReducer } from '../../app/planets/pages/Planets/store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { planetReducer } from '../../app/planets/pages/Planet/store/reducers';
import { PlanetState } from '../../app/planets/pages/Planet/store/types';

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
