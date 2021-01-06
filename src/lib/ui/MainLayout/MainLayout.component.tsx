import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainBar from './MainBar';
import Content from './Content';


type Props = {
  children: React.ReactNode
};

export const MainLayout = (props: Props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <MainBar></MainBar>
      <Content>
        { props.children }
      </Content>
    </React.Fragment>
  );
};
