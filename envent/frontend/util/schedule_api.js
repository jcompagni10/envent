export const getScheduleItem = ( scheduleItemId) => (
  $.ajax({
    url: `/api/schedule_items/${scheduleItemId}`
  })
);

export const getScheduleItems = (eventId) => (
  $.ajax({
    url: `/api/events/${eventId}/schedule_items/`
  })
);

export const postScheduleItem = (eventId, schedule_item) => (
  $.ajax({
    method: 'POST',
    url: `api/events/${eventId}/schedule_items`,
    data: { schedule_item }
  })
);

export const deleteScheduleItem = (scheduleItemId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/schedule_items/${scheduleItemId}`,
  })
);