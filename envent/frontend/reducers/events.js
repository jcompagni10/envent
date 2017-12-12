import { 
  RECEIVE_EVENT,
  RECEIVE_EVENTS
} from '../actions/event';
import {
  RECEIVE_SCHEDULE_ITEM,
  RECEIVE_SCHEDULE_ITEMS,
  DELETE_SCHEDULE_ITEM
} from '../actions/scheduleItem';


export default (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  let index;

  switch (action.type) {
    case RECEIVE_EVENT:
      return Object.assign({}, newState, {[action.event.id]: action.event});
      
      // don't think this is ever used
    case RECEIVE_EVENTS:
      return action.events;

    case RECEIVE_SCHEDULE_ITEM:
      newState[action.scheduleItem.event_id].scheduleItems[action.scheduleItem.id] = action.scheduleItem;

      index = newState[action.scheduleItem.event_id]
        .scheduleItemsArray
        .indexOf(action.scheduleItem.id);
      if (index > -1) {
        newState[action.scheduleItem.event_id].scheduleItemsArray.splice(index, 1);
      }
      newState[action.scheduleItem.event_id]
        .scheduleItemsArray
        .unshift(action.scheduleItem.id);

      return newState;
      
    case RECEIVE_SCHEDULE_ITEMS:
      return;
      
    case DELETE_SCHEDULE_ITEM:
      return;

    default:
      return state;
  }
};
