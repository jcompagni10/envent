import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  Button,
  ListView,
  ActivityIndicator,
} from 'react-native';
import HomeLandingPage from './components/homeLandingPage';

export default class App extends React.Component {

  render() {
    return (
      <HomeLandingPage />

    //   <NavigatorIOS
    //     initialRoute={{
    //       component: HomeLandingPage,
    //       title: "Home Landing Page"
    //     }}
    //     style={{ flex: 1 }}
    //   />

    );
  }

  
  // render() {
    //   return (
      //     <HomeLandingPage />
      //   );
      // }
    }


// class NavigatorIOSApp extends React.Component {
//   render() {
//     return (
//       <NavigatorIOS
//         initialRoute={{
//           component: App,
//         }}
//         style={{ flex: 1 }}
//       />
//     );
//   }
// }