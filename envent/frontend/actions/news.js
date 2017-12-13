import {
  postNews,
  getNews,
  getSingleNews,
  patchNews,
  deleteNews
} from './../util/news_api';

export const RECEIVE_NEWS = "RECEIVE_NEWS";
export const RECEIVE_NEW = "RECEIVE_NEW";
export const DELETE_NEWS = "DELETE_NEWS";


//  actions
const receiveNew = (singleNews) => ({
  type: RECEIVE_NEW,
  singleNews
});

const receiveNews = news => ({
  type: RECEIVE_NEWS,
  news,
});

const destroyNews = (newsId) => ({
  type: DELETE_NEWS,
  newsId
});

// thunk action creators
export const createNews = (eventId, news) => dispatch => {
  return (
    postNews(eventId, news)
      .then(newNews => dispatch(receiveNew(newNews)))
  );
};

export const fetchSingleNews = newsId => dispatch => (
  getSingleNews(newsId)
    .then(news => dispatch(receiveNew(news)))
);

export const fetchNews = (eventId) => dispatch => (
  getNews(eventId)
    .then(news => dispatch(receiveNews(news)))
);

export const updateNews = (news) => dispatch => (
  patchNews(news)
    .then(newNews => dispatch(receiveNew(newNews)))
);

export const removeNews = newsId => dispatch => (
  deleteNews(newsId)
    .then(() => dispatch(destroyNews(newsId)))
);