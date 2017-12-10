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

export default DrawerNavigator({
  Home: {
    screen: HomeLandingPage,
  },
  EventLandingPage: {
    screen: EventLandingPage,
  },
});