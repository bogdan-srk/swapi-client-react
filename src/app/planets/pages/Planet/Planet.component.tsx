import * as React from 'react';
import { IPlanet } from '../../../../lib/entities/Planet.types';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';


type Props = {
  planet: IPlanet,
};

export const Planet = (props: Props) => {

  console.log(props.planet);
  const {
    climate,
    name,
    population,
    diameter,
    gravity,
    orbital_period,
    rotation_period,
    terrain,
  } = props.planet || {};

  return (
    <Container maxWidth="lg">
      <Typography gutterBottom variant="h5" component="h2">
        { name }
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <Typography>
            {`Name: ${name}`}
          </Typography>
          <Typography>
            {`Climate: ${climate}`}
          </Typography>
          <Typography>
            {`Population: ${population}`}
          </Typography>
          <Typography>
            {`Diameter: ${diameter}`}
          </Typography>
          <Typography>
            {`Gravity: ${gravity}`}
          </Typography>
          <Typography>
            {`Orbital Period: ${orbital_period}`}
          </Typography>
          <Typography>
            {`Rotation Period: ${rotation_period}`}
          </Typography>
        </Grid>

        <Grid item xs={12} md={8}>

        </Grid>
      </Grid>
    </Container>
  );
};
