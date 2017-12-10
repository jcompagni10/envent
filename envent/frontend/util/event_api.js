export const postEvent = (event) =>(
  $.ajax({
    method: 'POST',
    url: 'api/events',
    data: {event}
  })
);
