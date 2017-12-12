import {
  RECEIVE_SCHEDULE_ITEM,
  RECEIVE_SCHEDULE_ITEMS,
  POST_SCHEDULE_ITEM,
  DELETE_SCHEDULE_ITEM
} from '../actions/scheduleItem';

export default (state = { all_ids: [], by_id: {} }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SCHEDULE_ITEM:
      newState.by_id[action.scheduleItem.id] = action.scheduleItem; 


      let index = newState.all_ids.indexOf(action.scheduleItem.id);
      if (index > -1) {
        newState.all_ids.splice(index, 1);
      }
      newState.all_ids.unshift(action.scheduleItem.id);

      return newState;
    case RECEIVE_SCHEDULE_ITEMS:
      return action.scheduleItems;
    case POST_SCHEDULE_ITEM:
      return action.events;
    case DELETE_SCHEDULE_ITEM:
      return action.events;
    default:
      return state;
  }
};
