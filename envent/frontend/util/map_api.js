export const postMap = (eventId, map) => (
  $.ajax({
    method: 'POST',
    url: `api/events/${eventId}/maps/1`,
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