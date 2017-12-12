import {
  getScheduleItem,
  getScheduleItems,
  postScheduleItem,
  deleteScheduleItem,
} from '../util/schedule_api';

export const RECEIVE_SCHEDULE_ITEM = "RECEIVE_SCHEDULE_ITEM";
export const RECEIVE_SCHEDULE_ITEMS = "RECEIVE_SCHEDULE_ITEMS";
export const DELETE_SCHEDULE_ITEM = "DELETE_SCHEDULE_ITEM";

// actions
const receiveScheduleItem = scheduleItem => ({
  type: RECEIVE_SCHEDULE_ITEM,
  scheduleItem
});

const receiveScheduleItems = (scheduleItems) => ({
  type: RECEIVE_SCHEDULE_ITEMS,
  scheduleItems,
});

const removeScheduleItem = scheduleItemId => ({
  type: DELETE_SCHEDULE_ITEM,
  scheduleItemId
});



// thunk action creators
export const createScheduleItem = scheduleItem => dispatch => (
  postScheduleItem(scheduleItem)
    .then(newScheduleItem => dispatch(receiveScheduleItem(newScheduleItem)))
);

export const fetchScheduleItem = scheduleItemId => dispatch => (
  getScheduleItem(scheduleItemId)
    .then(scheduleItem => dispatch(receiveScheduleItem(scheduleItem)))
);

export const fetchScheduleItems = () => dispatch => (
  getScheduleItems()
    .then(scheduleItems => dispatch(receiveScheduleItems(scheduleItems)))
);

export const destroyScheduleItem = scheduleItemId => dispatch => (
  deleteScheduleItem(scheduleItemId)
    .then( () => dispatch(removeScheduleItem(scheduleItemId)))
);