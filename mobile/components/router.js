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
import CustomItems from './custom_items';
import Home from './landing_page';


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
    },
    Schedule: {
      screen: Schedule,
    },
    News: {
      screen: News
    },
    MessageBoard: {
      screen: MessageBoard
    }
  },
  {
    contentComponent: props =>
    <ScrollView>
      <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
        <CustomItems {...props} />
      </SafeAreaView>
    </ScrollView>
  }
);
