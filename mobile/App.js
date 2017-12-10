// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TextInput,
//   Alert,
//   Button,
//   ListView,
//   ActivityIndicator,
// } from 'react-native';
// import HomeLandingPage from './components/homeLandingPage';

// export default class App extends React.Component {

//   render() {
//     return (
//       <HomeLandingPage />

//     //   <NavigatorIOS
//     //     initialRoute={{
//     //       component: HomeLandingPage,
//     //       title: "Home Landing Page"
//     //     }}
//     //     style={{ flex: 1 }}
//     //   />

//     );
//   }

  
//   // render() {
//     //   return (
//       //     <HomeLandingPage />
//       //   );
//       // }
//     }


// // class NavigatorIOSApp extends React.Component {
// //   render() {
// //     return (
// //       <NavigatorIOS
// //         initialRoute={{
// //           component: App,
// //         }}
// //         style={{ flex: 1 }}
// //       />
// //     );
// //   }
// // }

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



// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Home'
//   };

//   render() {
//     return (
//       <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
//         <Text onPress={this._handlePress}>HomeScreen!</Text>
//       </View>
//     )
//   }

//   _handlePress = () => {
//     this.props.navigation.navigate('Home');
//   }
// }

export default DrawerNavigator({
  Home: {
    screen: HomeLandingPage,
  },
  EventLandingPage: {
    screen: EventLandingPage,
  },
});