export const postInfo = (eventId, info) => (
  $.ajax({
    method: 'POST',
    url: `api/events/${eventId}/info`,
    data: { info }
  })
);

export const getInfo = (eventId) => (
  $.ajax({
    // harded coded '1' below, id isn't used to find info but is necessary for routing
    url: `/api/events/${eventId}/info/1`
  })
);

export const patchInfo = (eventId, info) => (
  $.ajax({
    method: "PATCH",
    // harded coded '1' below, id isn't used to find info but is necessary for routing
    url: `/api/events/${eventId}/info/1`,
    data: { info }
  })
);