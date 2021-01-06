import * as React from 'react';
import { useStyles } from './Content.styles';

type Props = {
  children: React.ReactNode
};

export const Content = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={ classes.content }>
      { props.children }
    </div>
  );
};
