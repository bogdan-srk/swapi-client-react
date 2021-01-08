import * as React from 'react';
import Typography from '@material-ui/core/Typography';

type Props = {
  readonly climate: string;
  readonly name: string;
  readonly population: string;
  readonly url: string;
  readonly diameter?: string;
  readonly gravity?: string;
  readonly orbital_period?: string;
  readonly rotation_period?: string;
  readonly terrain?: string;
  readonly residents?: string[];
};

export const PlanetDescription = (props: Props) => {
  return (
    <>
      <Typography paragraph>
        {`Name: ${props.name}`}
      </Typography>
      <Typography paragraph>
        {`Climate: ${props.climate}`}
      </Typography>
      <Typography paragraph>
        {`Population: ${props.population}`}
      </Typography>
      <Typography paragraph>
        {`Diameter: ${props.diameter}`}
      </Typography>
      <Typography paragraph>
        {`Gravity: ${props.gravity}`}
      </Typography>
      <Typography paragraph>
        {`Orbital Period: ${props.orbital_period}`}
      </Typography>
      <Typography paragraph>
        {`Rotation Period: ${props.rotation_period}`}
      </Typography>
      <Typography paragraph>
        {`Terrain: ${props.terrain}`}
      </Typography>
    </>
  );
};
