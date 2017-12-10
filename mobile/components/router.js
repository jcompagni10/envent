import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import EventLandingPage from './eventLandingPage';

export const DrawerRouter = DrawerNavigator({
  EventLandingPage: {
    screen: EventLandingPage,
  },
});