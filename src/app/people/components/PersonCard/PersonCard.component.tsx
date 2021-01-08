import * as React from 'react';
import { Card } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { useState } from 'react';
import clsx from 'clsx';
import { useStyles } from './PersonCard.styles';

type Props = {
  name: string
  height: string
  mass: string
  gender: string
};

export const PersonCard = (props: Props) => {
  const [ expanded, setExpanded ] = useState(false);
  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardActions disableSpacing>
        <Typography>
          { props.name }
        </Typography>

        <IconButton
          className={ clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          }) }
          onClick={ handleExpandClick }
          aria-expanded={ expanded }
          aria-label="show more"
        >
          <ExpandMoreIcon/>
        </IconButton>
      </CardActions>

      <Collapse in={ expanded } timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            Name: { props.name }
          </Typography>
          <Typography>
            Height: { props.height }
          </Typography>
          <Typography>
            Mass: { props.mass }
          </Typography>
          <Typography>
            Gender: { props.gender }
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
