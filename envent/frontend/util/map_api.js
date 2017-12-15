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

export const fetchMap = (eventId) => (
  $.ajax({
    method: 'GET', 
    url: `api/events/${eventId}/maps/1`
  })
);