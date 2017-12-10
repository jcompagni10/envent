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
  NavigatorIOS,
} from 'react-native';

import HomeLandingPage from './components/homeLandingPage';

export default class App extends React.Component {
  // static propTypes = {
  //   navigator: PropTypes.object.isRequired,
  // }


  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: HomeLandingPage,
          title: "Home Landing Page"
        }}
        style={{ flex: 1 }}
      />
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