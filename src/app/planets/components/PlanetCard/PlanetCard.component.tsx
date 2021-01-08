import * as React from 'react';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './PlanetCard.styles';
import { Link } from 'react-router-dom';

type Props = {
  id?: string
  name: string
  climate: string
  population: string
};

export const PlanetCard = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid item key={props.id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            { props.name }
          </Typography>
          <Typography>
            { props.climate }
          </Typography>
          <Typography>
            { props.population }
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            to={ `/planets/${props.id}` }
            component={Link}
          >
            View
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
