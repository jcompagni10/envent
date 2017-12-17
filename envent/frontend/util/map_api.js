export const postMap = (eventId, map) => (
  $.ajax({
    method: 'POST',
    url: `api/events/${eventId}/maps`,
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

export const patchMap = map => {
  return(
    $.ajax({
      method: "PATCH",
      url: `api/events/${map.id}`,
      data: {map}
    })
  );
};