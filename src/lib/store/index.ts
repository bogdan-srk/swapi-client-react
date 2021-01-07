import { PlanetsState } from '../../app/planets/Planets/store/types';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { planetsReducer } from '../../app/planets/Planets/store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export interface ApplicationState {
  planets: PlanetsState
}

export const createRootReducer = () =>
  combineReducers({
    planets: planetsReducer,
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
