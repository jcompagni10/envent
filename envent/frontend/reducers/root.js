import session from './session';
import {combineReducers} from 'redux';
import events from './events';
import errors from './errors';
import maps from './map';

export default combineReducers({
  session,
  errors,
  events,
  maps
});
