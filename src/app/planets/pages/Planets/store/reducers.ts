import { Reducer } from 'redux';
import { PlanetsActionTypes, PlanetsState } from './types';
import { Planet } from '../../../../../lib/entities/Planet/Planet';
import { IFetchPlanetsData } from '../../../api/PlanetsApiService.types';

const initialState: PlanetsState = {
  page: 1,
  planets: [],
  errors: undefined,
  loading: false,
  count: 0,
};

const reducer: Reducer<PlanetsState> = (state = initialState, action) => {

  switch (action.type) {

    case PlanetsActionTypes.FETCH_REQUEST: {

      return { ...state, loading: true }
    }

    case PlanetsActionTypes.FETCH_SUCCESS: {
      const payload: IFetchPlanetsData = action.payload;
      let nextPlanets = payload.results.map((planetData) => new Planet(planetData));

      if (state.page > 1) {
        const prevPlanets = state.planets;
        nextPlanets = [...prevPlanets, ...nextPlanets];
      }

      return {
        ...state,
        loading: false,
        planets: nextPlanets,
        count: payload.count
      };
    }

    case PlanetsActionTypes.FETCH_ERROR: {

      return { ...state, loading: false, errors: action.payload }
    }

    case PlanetsActionTypes.INCREMENT_PAGE: {

      return { ...state, page: state.page + 1 };
    }

    default: {

      return state;
    }
  }
};

export { reducer as planetsReducer }
