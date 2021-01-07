import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Routes } from './lib/routes';
import { App } from './lib/app/App.component';
import { ApplicationState, configureStore } from './lib/store';

const store = configureStore({} as ApplicationState);

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
