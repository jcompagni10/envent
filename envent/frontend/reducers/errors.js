import { RECEIVE_EVENT_ERRORS, CLEAR_EVENT_ERRORS} from '../actions/event';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      return Object.assign({}, state, {eventErrors: action.errors});
    case CLEAR_EVENT_ERRORS:
      return Object.assign({}, state, {eventErrors: null});
    default:
      return state;
  }
};
