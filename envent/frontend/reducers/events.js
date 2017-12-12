import { RECEIVE_EVENT } from '../actions/event';
import { RECEIVE_MAP } from '../actions/map';

export default (state = {currentUser: null}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT:
      return Object.assign({}, state, {[action.event.id]: action.event});
    case RECEIVE_MAP:
      let newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
};
