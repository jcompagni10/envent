export const postNews = (eventId, news) => (
  $.ajax({
    method: 'POST',
    url: `api/events/${eventId}/news`,
    data: { news }
  })
);

export const getNews = (eventId) => (
  $.ajax({
    method: 'GET',
    url: `api/events/${eventId}/news`,
  })
);

export const getSingleNews = (newsId) => (
  $.ajax({
    method: 'GET',
    url: `api/news/${newsId}`,
  })
);

export const patchNews = news => (
  $.ajax({
    method: 'PATCH',
    url: `api/news/${news.id}`,
    data: { news }
  })
);

export const deleteNews = newsId => (
  $.ajax({
    method: 'DELETE',
    url: `api/news/${newsId}`,
  })
);

