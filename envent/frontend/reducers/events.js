import { RECEIVE_EVENT} from '../actions/event';

export default (state = {currentUser: null}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT:
      return Object.assign({}, state, {[action.event.id]: action.event});
    default:
      return state;
  }
};
