import {
  RECEIVE_MAP, 
  REMOVE_MAP
} from '../actions/map';

export default (state = {}, action) => {
   Object.freeze(state);
   let newState = Object.assign({}, state);
   switch(action.type){
     case RECEIVE_MAP:
      // return Object.assign({}, state, {[action.map.id]: action.map});
     case REMOVE_MAP:
      // delete newState[action.mapId];
      // return newState;
     default:
      return state;
   }
  };
