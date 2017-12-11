import React from 'react';
// import {
//   Text,
//   View,
// } from 'react-native';
import {
  // StackNavigator,
  DrawerNavigator,
  // NavigationActions,
} from 'react-navigation';
import HomeLandingPage from './components/homeLandingPage';
import EventLandingPage from './components/eventLandingPage';
import Router from './components/router';


// export default class App extends React.Component {
//   render() {
//     return (
//       <HomeLandingPage />
//     );
//   }
// }

export default DrawerNavigator({
  Home: {
    screen: HomeLandingPage,
  },
  Router: {
    screen: Router,
  },
});
