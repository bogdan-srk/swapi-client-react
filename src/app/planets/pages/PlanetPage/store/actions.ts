import { action } from '../../../../../lib/store/helpers';
import { IPlanetData } from '../../../../../lib/entities/Planet/Planet.types';
import { PlanetActionTypes } from './types';
import PlanetsApiService from '../../../api/PlanetsApiService';
import PeopleApiService from '../../../../people/api/PeopleApiService';

export const fetchRequest = () => action(PlanetActionTypes.FETCH_REQUEST);

export const fetchSuccess = (data: IPlanetData) => action(PlanetActionTypes.FETCH_SUCCESS, data);

export const fetchError = (message: string) => action(PlanetActionTypes.FETCH_ERROR, message);

export const resetState = () => action(PlanetActionTypes.RESET_STATE);

export const loadPlanet = (id: string) => {
  return async (dispatch: any, getState: any) => {
    dispatch(fetchRequest());
    try {
      const planetData = await PlanetsApiService.fetchPlanet(id);
      const peopleIds = planetData.residents?.map((url) => url.split('/').filter(Boolean).pop() || '')
      const people = await PeopleApiService.fetchPeople(peopleIds || []);

      dispatch(fetchSuccess({...planetData, people: people}));
    }
    catch (error) {
      console.log(error);
      dispatch(fetchError(error.message))
    }
  };
};
