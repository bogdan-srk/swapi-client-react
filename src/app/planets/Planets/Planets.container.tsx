import * as React from 'react';
import { Planets } from './Planets.component';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { incrementPage, loadPlanets } from './store/actions';
import { selectPlanets, selectPlanetsPage } from './store/selectors';

type Props = {

};

export const PlanetsContainer = (props: Props) => {
  const dispatch = useDispatch();
  const planets = useSelector(selectPlanets);
  const page = useSelector(selectPlanetsPage);

  const onLoadMore = () => {
    dispatch(incrementPage())
  };

  useEffect(() => {
    dispatch(loadPlanets(page));
  }, [page]);

  return (
    <Planets planets={ planets } onLoadMore={ onLoadMore }/>
  );
};
