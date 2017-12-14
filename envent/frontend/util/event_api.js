export const postEvent = (event) =>(
  $.ajax({
    method: 'POST',
    url: 'api/events',
    data: {event}
  })
);

export const getEvent = (eventTag) => (
  $.ajax({
    url: `/api/events/${eventTag}`
  })
);

export const getEvents = (userId) => (
  $.ajax({
    url: `/api/events/`,
    data: { userId }
  })
);