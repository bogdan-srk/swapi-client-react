import { action } from '../../../../../lib/store/helpers';
import { IPlanetData } from '../../../../../lib/entities/Planet.types';
import { PlanetActionTypes } from './types';
import PlanetsApiService from '../../../api/PlanetsApiService';

export const fetchRequest = () => action(PlanetActionTypes.FETCH_REQUEST);

export const fetchSuccess = (data: IPlanetData) => action(PlanetActionTypes.FETCH_SUCCESS, data);

export const fetchError = (message: string) => action(PlanetActionTypes.FETCH_ERROR, message);

export const loadPlanet = (id: string) => {
  return async (dispatch: any, getState: any) => {
    dispatch(fetchRequest());
    try {
      const planetData = await PlanetsApiService.fetchPlanet(id);
      dispatch(fetchSuccess(planetData));
    }
    catch (error) {
      console.log(error);
      dispatch(fetchError(error.message))
    }
  };
};
