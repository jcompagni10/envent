<<<<<<< HEAD
import { RECEIVE_EVENT } from '../actions/event';
import { RECEIVE_MAP } from '../actions/map';
=======
import { 
  RECEIVE_EVENT,
  RECEIVE_EVENTS
} from '../actions/event';
>>>>>>> 0402c07fc8c8c03aff276f3d48830c56b9d09517

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT:
      return Object.assign({}, state, {[action.event.id]: action.event});
<<<<<<< HEAD
    case RECEIVE_MAP:
      let newState = Object.assign({}, state);
      return newState;
=======
    case RECEIVE_EVENTS:
      return action.events;
>>>>>>> 0402c07fc8c8c03aff276f3d48830c56b9d09517
    default:
      return state;
  }
};
