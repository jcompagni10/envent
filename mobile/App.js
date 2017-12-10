import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import {
  StackNavigator,
  DrawerNavigator,
  NavigationActions,
} from 'react-navigation';
import HomeLandingPage from './components/homeLandingPage';
import EventLandingPage from './components/eventLandingPage';
import Schedule from './components/schedule/schedule';
import News from './components/news/news';
import MessageBoard from './components/messageBoard/messageBoard';

export default DrawerNavigator({
  Home: {
    screen: HomeLandingPage,
  },
  EventLandingPage: {
    screen: EventLandingPage,
  },
  Schedule: {
    screen: Schedule,
  },
  News: {
    screen: News,
  },
  MessageBoard: {
    screen: MessageBoard,
  },
});