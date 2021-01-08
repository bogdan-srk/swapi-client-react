import * as React from 'react';
import { IPlanet } from '../../../../lib/entities/Planet/Planet.types';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { PersonCard } from '../../../people/components/PersonCard/PersonCard.component';
import { PlanetDescription } from '../../components/PlanetDescription/PlanetDescription.component';


type Props = {
  planet: IPlanet,
};

export const Planet = (props: Props) => {

  return (
    <Container maxWidth="lg">
      <Typography gutterBottom variant="h5" component="h2">
        { props.planet.name }
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <PlanetDescription { ...props.planet } />
        </Grid>

        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>
            { props.planet.people.map((person) => (
              <Grid key={ person.id} item xs={12} sm={6} md={4}>
                <PersonCard { ...person } />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
