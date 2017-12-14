export const postMap = (map) => (
  $.ajax({
    method: 'POST',
    url: 'api/maps',
    data: {map}
  })
);

export const deleteMap = (id) => (
  $.ajax({
    method: 'DELETE', 
    url: `api/maps/${id}`
  })
);

export const fetchMap = (event_id) => (
  $.ajax({
    method: 'GET', 
    url: `api/events/${event_id}/maps/${map_id}`
  })
);