import { PlanetsActionTypes } from './types';
import PlanetsApiService from '../../../api/PlanetsApiService';
import { action } from '../../../../../lib/store/helpers';
import { IFetchPlanetsData } from '../../../api/PlanetsApiService.types';


export const fetchRequest = () => action(PlanetsActionTypes.FETCH_REQUEST);

export const fetchSuccess = (data: IFetchPlanetsData) => action(PlanetsActionTypes.FETCH_SUCCESS, data);

export const fetchError = (message: string) => action(PlanetsActionTypes.FETCH_ERROR, message);

export const incrementPage = () => action(PlanetsActionTypes.INCREMENT_PAGE);

export const resetState = () => action(PlanetsActionTypes.RESET_STATE);

export const loadPlanets = (page: number = 1) => {
  return async (dispatch: any, getState: any) => {
    dispatch(fetchRequest());
    try {
      const fetchPlanetsResponse = await PlanetsApiService.fetchPlanets(page);
      dispatch(fetchSuccess(fetchPlanetsResponse));
    }
    catch (error) {
      console.log(error);
      dispatch(fetchError(error.message))
    }
  };
};
