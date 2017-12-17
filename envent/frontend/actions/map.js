import {
  postMap,
  deleteMap,
  fetchMap
} from '../util/map_api';

export const RECEIVE_MAP = "RECEIVE_MAP";
export const REMOVE_MAP = "REMOVE_MAP";
export const RECEIVE_MAP_ERRORS = "RECEIVE_MAP_ERRORS";
export const CLEAR_MAP_ERRORS = "CLEAR_MAP_ERRORS";

const receiveMap = (map) => ({
  type: RECEIVE_MAP,
  map
});

const receiveMapErrors = (errors) => ({
  type: RECEIVE_MAP_ERRORS, 
  errors
});

const removeMap = mapId => ({
  type: REMOVE_MAP, 
  mapId
});

export const getMap = (eventId) => dispatch => (
  fetchMap(eventId)
  .then(map => dispatch(receiveMap(map)),
    errors => dispatch(receiveMapErrors(errors.responseJSON))
  )
);

export const createMap = (eventId, map) => dispatch => (
  postMap(map)
  .then(map => dispatch(receiveMap(map)),
    errors => dispatch(receiveMapErrors(errors.responseJSON))
  )
);

export const destroyMap = mapId => dispatch => (
  deleteMap(mapId)
  .then(map => dispatch(removeMap(map)),
     errors => dispatch(receiveMapErrors(errors.responseJSON))
  )
);