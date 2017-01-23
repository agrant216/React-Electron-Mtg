// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import MtgPage from './containers/MtgPage';
import ModeSelectPage from './containers/ModeSelectPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/counter" component={CounterPage} />
    <Route path="/mtg" component={MtgPage} />
    <Route path="/modeSelect" component={ModeSelectPage}/>
  </Route>
);
