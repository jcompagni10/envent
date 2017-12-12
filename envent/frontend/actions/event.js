import {
  postEvent,
  getEvent,
  getEvents
} from '../util/event_api';

export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";
export const CLEAR_EVENT_ERRORS = "CLEAR_EVENT_ERRORS";

// actions
const receiveEvent = (event)=> ({
  type: RECEIVE_EVENT,
  event
});

const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events,
});

const receiveEventErrors = (errors) => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
});



// thunk action creators
export const createEvent = event => dispatch => (
  postEvent(event)
  .then(dbEvent => dispatch(receiveEvent(dbEvent)),
    errors => dispatch(receiveEventErrors(errors.responseJSON))
  )
);

export const fetchEvent = eventId => dispatch => (
  getEvent(eventId)
  .then(event => dispatch(receiveEvent(event)))
); 

export const fetchEvents = () => dispatch => (
  getEvents()
    .then(events => dispatch(receiveEvents(events)))
);