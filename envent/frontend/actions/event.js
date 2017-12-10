import {postEvent} from '../util/event_api';

export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";
export const CLEAR_EVENT_ERRORS = "CLEAR_EVENT_ERRORS";


const receiveEvent = (event)=> ({
  type: RECEIVE_EVENT,
  event
});

const receiveEventErrors = (errors) => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
});



export const createEvent = event => dispatch => (
  postEvent(event)
  .then(dbEvent => dispatch(receiveEvent(dbEvent)),
    errors => dispatch(receiveEventErrors(errors.responseJSON))
  )
);
