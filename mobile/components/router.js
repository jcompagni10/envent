import React from 'react';
import {
  DrawerNavigator,
  DrawerItems,
  SafeAreaView
} from 'react-navigation';
import {ScrollView} from 'react-native';
import EventLandingPage from './event_landing_page';
import Schedule from './schedule/schedule';
import News from './news/news';
import MessageBoard from './messageBoard/messageBoard';
import NavMenu from './nav_menu';
import Home from './landing_page';
import AuthFormPage from './auth_form_page';

export default DrawerNavigator(
  {
    EventLandingPage: {
      screen: EventLandingPage,
    },
    Schedule: {
      screen: Schedule,
    },
    News: {
      screen: News
    },
    MessageBoard: {
      screen: MessageBoard
    },
    SignIn : {
      screen: AuthFormPage
    }
  },
  {
    contentComponent: props =>
        <NavMenu {...props} />
  }
);
