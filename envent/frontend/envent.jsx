import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store.js';
<<<<<<< HEAD
import { login, logout, signupUser } from './actions/session';
=======
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
>>>>>>> 695f441243c7407408fa246586bd8871c21cbe56


document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = { session: { currentUser: window.currentUser } };
    delete window.currentUser;
  }
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
<<<<<<< HEAD
  window.login = login;
  window.signup = signupUser;
  window.logout = logout;

=======
  window.createScheduleItem = createScheduleItem;
  window.fetchScheduleItem = fetchScheduleItem;
  window.fetchScheduleItems = fetchScheduleItems;
  window.destroyScheduleItem = destroyScheduleItem;
  window.fetchEvent = fetchEvent;
  window.fetchEvents = fetchEvents;
>>>>>>> 695f441243c7407408fa246586bd8871c21cbe56
});
