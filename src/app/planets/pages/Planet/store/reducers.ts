import { Reducer } from 'redux';
import { PlanetActionTypes, PlanetState } from './types';
import { Planet } from '../../../../../lib/entities/Planet/Planet';
import { IPlanetData } from '../../../../../lib/entities/Planet/Planet.types';

const initialState: PlanetState = {
  planet: undefined,
  errors: undefined,
  loading: false,
};

const reducer: Reducer<PlanetState> = (state = initialState, action) => {

  switch (action.type) {

    case PlanetActionTypes.FETCH_REQUEST: {

      return { ...state, loading: true }
    }

    case PlanetActionTypes.FETCH_SUCCESS: {
      const payload: IPlanetData = action.payload;
      const planet = new Planet(payload);

      return {
        ...state,
        planet,
        loading: false,
      };
    }

    case PlanetActionTypes.FETCH_ERROR: {

      return { ...state, loading: false, errors: action.payload }
    }

    default: {

      return state
    }
  }
};

export { reducer as planetReducer }
