import session from './session';
import {combineReducers} from 'redux';
import events from './events';
import errors from './errors';
import scheduleItems from './schedule_items';
import currentEvent from './current_event';
import currentEv from './current_ev';

export default combineReducers({
  session,
  errors,
  events,
  currentEvent,
  scheduleItems,
  currentEv,
});
