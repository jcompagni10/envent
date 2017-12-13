import {
  RECEIVE_EVENT
} from './../actions/event';
import {
  RECEIVE_SCHEDULE_ITEM,
  RECEIVE_SCHEDULE_ITEMS,
  DELETE_SCHEDULE_ITEM
} from '../actions/scheduleItem';


const currentEvent = (state = { scheduleItems: {}, scheduleItemArray: [] }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  let index;
  
  switch (action.type) {
    case RECEIVE_EVENT:
      return action.event;

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
      newState.scheduleItems = action.scheduleItems.by_id;
      newState.scheduleItemsArray = action.scheduleItems.all_ids;
    
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

    default:
      return state;
  }
};

export default currentEvent;