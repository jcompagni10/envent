import session from './session';
import {combineReducers} from 'redux';
import events from './events';
import errors from './errors';
<<<<<<< HEAD
import maps from './map';
=======
import scheduleItems from './schedule_items';
>>>>>>> 0402c07fc8c8c03aff276f3d48830c56b9d09517

export default combineReducers({
  session,
  errors,
  events,
<<<<<<< HEAD
  maps
=======
  scheduleItems
>>>>>>> 0402c07fc8c8c03aff276f3d48830c56b9d09517
});
