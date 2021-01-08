import * as React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar/AppBar';
import useStyles from './MainBar.styles';
import { Link } from 'react-router-dom';

type Props = {

};

export const MainBar = (props: Props) => {
  const classes = useStyles();

  return (
    <AppBar position='sticky' color='default' elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant='h6'
          color='inherit'
          noWrap
          className={ classes.toolbarTitle }
          component={ (props) => (<Link to={'/'} {...props} />) }
        >
          Star Wars
        </Typography>
        <div id={'main-bar-portal-root'} />
      </Toolbar>
    </AppBar>
  );
};
