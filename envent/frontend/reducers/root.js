import session from './session';
import {combineReducers} from 'redux';
import events from './events';
import errors from './errors';
import maps from './map';
import scheduleItems from './schedule_items';

export default combineReducers({
  session,
  errors,
  events,
  maps,
  scheduleItems
});
