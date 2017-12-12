export const getScheduleItem = (scheduleItemId) => (
  $.ajax({
    url: `/api/schedule_items/${scheduleItemId}`
  })
);

export const getScheduleItems = () => (
  $.ajax({
    url: `/api/schedule_items/`
  })
);

export const postScheduleItem = (schedule_item) => (
  $.ajax({
    method: 'POST',
    url: 'api/schedule_items',
    data: { schedule_item }
  })
);

export const deleteScheduleItem = (scheduleItemId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/schedule_items/${scheduleItemId}`,
  })
);