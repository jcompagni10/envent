import { RECEIVE_MAP } from '../actions/map';
import { 
  RECEIVE_EVENT,
  RECEIVE_EVENTS
} from '../actions/event';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT:
      return Object.assign({}, state, {[action.event.id]: action.event});
    case RECEIVE_MAP:
      let newState = Object.assign({}, state);
      return newState;
    case RECEIVE_EVENTS:
      return action.events;
    default:
      return state;
  }
};
