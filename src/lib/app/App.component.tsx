import * as React from 'react';
import { Store } from 'redux';
import { ApplicationState } from '../store';
import { Routes } from '../routes';
import { Provider } from 'react-redux'


type Props = {
  store: Store<ApplicationState>
};

export const App = (props: Props) => {

  return (
    <Provider store={ props.store }>
      <Routes />
    </Provider>
  );
};
