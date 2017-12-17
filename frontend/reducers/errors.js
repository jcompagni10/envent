import { RECEIVE_EVENT_ERRORS, CLEAR_EVENT_ERRORS} from '../actions/event';
import { RECEIVE_MAP_ERRORS, CLEAR_MAP_ERRORS } from '../actions/map';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      return Object.assign({}, state, {eventErrors: action.errors});
    case RECEIVE_MAP_ERRORS: 
      return Object.assign({}, state, {mapErrors: action.errors});
    case CLEAR_EVENT_ERRORS:
      return Object.assign({}, state, {eventErrors: null});
    case CLEAR_MAP_ERRORS:
      return Object.assign({}, state, {mapErrors: action.errors});
    default:
      return state;
  }
};
