import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import HomeLandingPage from './components/landing_page';
import Router from './components/router';


export default StackNavigator(
  {
    Home: {
      screen: HomeLandingPage,
    },
    Router: {
      screen: Router,
    },
  },
  {
    headerMode: "none"
  }
);
