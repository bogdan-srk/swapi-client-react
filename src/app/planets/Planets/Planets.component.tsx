import * as React from 'react';
import { IPlanet } from '../../../lib/entities/Planet.types';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { useStyles } from './Planets.styles';

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
        {planets.map((planet) => (
          <Grid item key={planet.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  { planet.name }
                </Typography>
                <Typography>
                  { planet.climate }
                </Typography>
                <Typography>
                  { planet.population }
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container justify="center">
        <Button variant="contained" color="primary" onClick={() => onLoadMore()}>
          Load more
        </Button>
      </Grid>
    </Container>
  );
};
