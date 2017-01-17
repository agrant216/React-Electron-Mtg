// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import mtgApp from './mtg';

const rootReducer = combineReducers({
  counter,
  mtgApp,
  routing
});

export default rootReducer;
