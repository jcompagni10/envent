export const postMap = (eventId, map) => (
  $.ajax({
    method: 'POST',
    url: `api/events/${eventId}/maps`,
    data: {map}
  })
);

// don't use
// export const deleteMap = (id) => (
//   $.ajax({
//     method: 'DELETE', 
//     url: `api/maps/${id}`
//   })
// );

export const fetchMap = (eventId) => (
  $.ajax({
    method: 'GET', 
    url: `api/events/${eventId}/maps`
  })
);

export const patchMap = (eventId, map) => {
  return(
    $.ajax({
      method: "PATCH",
      url: `api/events/${eventId}/maps/1`,
      data: {map}
    })
  );
};