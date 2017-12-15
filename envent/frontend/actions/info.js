import {
  postInfo,
  getInfo,
  patchInfo
} from './../util/info_api';

export const RECEIVE_INFO = "RECEIVE_INFO";

// actions
const receiveInfo = info => ({
  type: RECEIVE_INFO,
  info
});

// thunk action creators
export const createInfo = (eventId, info) => dispatch => (
  postInfo(eventId, info)
    .then(newInfo => dispatch(receiveInfo(newInfo))
  )
);

export const fetchInfo = eventId => dispatch => (
  getInfo(eventId)
    .then(info => dispatch(receiveInfo(info))
  )
);

export const updateInfo = (eventId, info) => dispatch => (
  patchInfo(eventId, info)
    .then(newInfo => dispatch(receiveInfo(newInfo))
  )
);