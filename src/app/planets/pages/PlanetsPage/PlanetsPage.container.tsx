import * as React from 'react';
import { PlanetsPage } from './PlanetsPage.component';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { incrementPage, loadPlanets, resetState } from './store/actions';
import { selectPlanets, selectPlanetsPage } from './store/selectors';
import { MainBarPortal } from '../../../../lib/ui/MainLayout/MainBarPortal/MainBarPortal.component';
import { Typography } from '@material-ui/core';

type Props = {

};

export const PlanetsPageContainer = (props: Props) => {
  const dispatch = useDispatch();
  const planets = useSelector(selectPlanets);
  const page = useSelector(selectPlanetsPage);

  const onLoadMore = () => {
    dispatch(incrementPage())
  };

  useEffect(() => {
    dispatch(loadPlanets(page));
  }, [page, dispatch]);

  useEffect(() => () => {
    dispatch(resetState());
  }, [dispatch]);

  return (
    <>
      <MainBarPortal>
        <Typography>Pages loaded: { page }</Typography>
      </MainBarPortal>
      <PlanetsPage planets={ planets } onLoadMore={ onLoadMore }/>
    </>
  );
};
