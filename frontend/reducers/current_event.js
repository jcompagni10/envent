import {
  RECEIVE_EVENT
} from './../actions/event';
import {
  RECEIVE_SCHEDULE_ITEM,
  RECEIVE_SCHEDULE_ITEMS,
  DELETE_SCHEDULE_ITEM
} from '../actions/scheduleItem';
import {
  RECEIVE_MAP, 
  REMOVE_MAP
} from '../actions/map';
import  {
  RECEIVE_INFO
} from '../actions/info';

let _nullState = {
  scheduleItems: {},
  scheduleItemsArray: [],
  info: {},
  maps: {}
};

const currentEvent = (state = _nullState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  let index;
  switch (action.type) {
    case RECEIVE_EVENT:
      return Object.assign({}, _nullState, action.event);

    case RECEIVE_SCHEDULE_ITEM:
      newState.scheduleItems[action.scheduleItem.id] = action.scheduleItem;
      index = newState
        .scheduleItemsArray
        .indexOf(action.scheduleItem.id);
      if (index > 1) {
        newState
          .scheduleItemsArray.splice(index, 1);
      }
      newState
        .scheduleItemsArray
        .unshift(action.scheduleItem.id);
      
        return newState; 

    case RECEIVE_SCHEDULE_ITEMS:
      if (action.scheduleItems.by_id === undefined) {
        action.scheduleItems.by_id = {};
      } else {
        newState.scheduleItems = action.scheduleItems.by_id;
      }

      if (action.scheduleItems.all_ids === undefined) {
        newState.scheduleItemsArray = [];  
      } else {
        newState.scheduleItemsArray = action.scheduleItems.all_ids;
      }
    
      return newState;

    case DELETE_SCHEDULE_ITEM:
      newState.currentEvent.scheduleItems[action.scheduleItemId] = undefined;

      index = newState
        .currentEvent
        .scheduleItemsArray
        .indexOf(action.scheduleItemId);
      if (index > -1) {
        newState.currentEvent.scheduleItemsArray.splice(index, 1);
      }
    
      return newState;
    
    case RECEIVE_MAP:
      let maps = Object.assign({}, state.maps, { [action.map]: action.map });
      newState.maps = maps;
      return newState;
      // newState.maps = action.maps;
      // return newState;
    case REMOVE_MAP:
      newState.maps = undefined;
      return newState;

    case RECEIVE_INFO:
      newState.info = action.info;
      return newState;

    default:
      return state;
  }
};

export default currentEvent;