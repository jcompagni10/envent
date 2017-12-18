import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store.js';

import {
  createScheduleItem,
  fetchScheduleItem,
  fetchScheduleItems,
  destroyScheduleItem
} from './actions/scheduleItem';

import {
  fetchEvent,
  fetchEvents,
} from './actions/event';

import {
  getMap,
  createMap,
  destroyMap
} from './actions/map';

import{
  createNews,
  fetchSingleNews,
  fetchNews,
  updateNews,
  removeNews,
} from './actions/news';

import {
  createInfo,
  fetchInfo,
  updateInfo
} from './actions/info';


document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = { session: { currentUser: window.currentUser } };
    delete window.currentUser;
  }
  const store = configureStore(preloadedState);
  // window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.createScheduleItem = createScheduleItem;
  // window.fetchScheduleItem = fetchScheduleItem;
  // window.fetchScheduleItems = fetchScheduleItems;
  // window.destroyScheduleItem = destroyScheduleItem;
  // window.fetchEvent = fetchEvent;
  // window.fetchEvents = fetchEvents;
  // window.getMap = getMap;
  // window.createMap = createMap;
  // window.destroyMap = destroyMap;

  // window.createNews = createNews;
  // window.fetchSingleNews = fetchSingleNews;
  // window.fetchNews = fetchNews;
  // window.updateNews = updateNews;
  // window.removeNews = removeNews;

  // window.createInfo = createInfo;
  // window.fetchInfo = fetchInfo;
  // window.updateInfo = updateInfo;
});
