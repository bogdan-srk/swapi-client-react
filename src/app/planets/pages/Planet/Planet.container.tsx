import * as React from 'react';
import { Planet } from './Planet.component';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlanet } from './store/selectors';
import { IPlanet } from '../../../../lib/entities/Planet.types';
import { useEffect } from 'react';
import { loadPlanet } from './store/actions';
import { useParams } from 'react-router-dom';

type Props = {

};

export const PlanetContainer = (props: Props) => {
  const dispatch = useDispatch();
  const {id: planetId} = useParams() as {id: string};
  const planet = useSelector(selectPlanet);

  useEffect(() => {
    dispatch(loadPlanet(planetId));
  }, []);

  return (
    <Planet planet={ planet as IPlanet} />
  );
};
