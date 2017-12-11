import React from 'react';
import {
  DrawerNavigator,
} from 'react-navigation';
import {Text} from 'react-native';

import EventLandingPage from './eventLandingPage';
import Schedule from './schedule/schedule';
import News from './news/news';
import MessageBoard from './messageBoard/messageBoard';
import CustomWE from './customwe';


// let drawerRoutes = {
//   EventLandingPage: {
//     screen: EventLandingPage,
//   },
//   Schedule: {
//     screen: Schedule,
//   },
//   News: {
//     screen: News,
//   },
//   MessageBoard: {
//     screen: MessageBoard,
//   },
// };

// export default DrawerNavigator(navigation.state.params.drawerRoutes);
// export default () => {
//   // console.log(navigation);
//   // debugger;
//   return DrawerNavigator({
//     EventLandingPage: {
//       screen: EventLandingPage,
//       // navigationOptions: ({navigation}) => ({
//       //   eventId: navigation.state.params.eventId
//       // })
//     },
//     Schedule: {
//       screen: Schedule,
//     },
//     News: {
//       screen: News,
//     },
//     MessageBoard: {
//       screen: MessageBoard,
//     },
//   });
// };

export default DrawerNavigator(
  {
    EventLandingPage: {
      screen: EventLandingPage,
    }
  },
  {
    contentComponent: props =>
    <Text>{props.navigation.state}</Text>
  }
);
