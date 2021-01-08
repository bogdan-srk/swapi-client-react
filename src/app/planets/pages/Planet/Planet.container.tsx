import * as React from 'react';
import { Planet } from './Planet.component';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectPlanet } from './store/selectors';
import { useEffect } from 'react';
import { loadPlanet } from './store/actions';
import { useParams } from 'react-router-dom';
import { resetState } from './store/actions';
import { CircularProgress } from '@material-ui/core';

type Props = {

};

export const PlanetContainer = (props: Props) => {
  const dispatch = useDispatch();
  const {id: planetId} = useParams() as {id: string};
  const planet = useSelector(selectPlanet);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(loadPlanet(planetId));
  }, [planetId, dispatch]);

  useEffect(() => () => {
    dispatch(resetState());
  }, [dispatch]);

  return (
    !loading && planet
      ? <Planet planet={ planet } />
      : <CircularProgress />
  );
};
