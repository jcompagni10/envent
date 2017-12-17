import { RECEIVE_CURRENT_USER,
         RECEIVE_SESSION_ERRORS,
         CLEAR_SESSION_ERRORS } from '../actions/session';

export default (state = {currentUser: null}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, {currentUser: action.currentUser});
    case RECEIVE_SESSION_ERRORS:
      return Object.assign({}, {errors: action.errors});
    case CLEAR_SESSION_ERRORS:
      return Object.assign({}, state, {errors: null});
    default:
      return state;
  }
};
