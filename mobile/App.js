import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import LandingPage from './components/landing_page';
import Router from './components/router';


export default StackNavigator(
  {
    Home: {
      screen: LandingPage,
    },
    Router: {
      screen: Router,
    },
  },
  {
    headerMode: "none"
  }
);
