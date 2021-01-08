import * as React from 'react';

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
    <div>

    </div>
  );
};
