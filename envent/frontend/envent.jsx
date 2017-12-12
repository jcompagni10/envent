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


document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = { session: { currentUser: window.currentUser } };
    delete window.currentUser;
  }
  const store = configureStore(preloadedState);
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  window.dispatch = store.dispatch;
  window.createScheduleItem = createScheduleItem
  window.fetchScheduleItem = fetchScheduleItem
  window.fetchScheduleItems = fetchScheduleItems
  window.destroyScheduleItem = destroyScheduleItem
});
