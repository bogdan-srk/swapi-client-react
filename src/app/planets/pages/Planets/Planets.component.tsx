import * as React from 'react';
import { IPlanet } from '../../../../lib/entities/Planet/Planet.types';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useStyles } from './Planets.styles';
import { PlanetCard } from '../../components/PlanetCard/PlanetCard.component';

type Props = {
  planets: IPlanet[]
  onLoadMore: () => void
};


export const Planets = (props: Props) => {
  const classes = useStyles();
  const { planets, onLoadMore } = props;

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        { planets.map((planet) => (<PlanetCard key={planet.id} { ...planet }/>)) }
      </Grid>
      <Grid container justify="center">
        <Button variant="contained" color="primary" onClick={() => onLoadMore()}>
          Load more
        </Button>
      </Grid>
    </Container>
  );
};
