import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './lib/app/App.component';
import { ApplicationState, configureStore } from './lib/store';

const store = configureStore({} as ApplicationState);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
