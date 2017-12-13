import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ListView,
  ActivityIndicator,
  TouchableHighlight,
  Alert
} from 'react-native';
import style from './styles/event_landing_page.js';
import Header from './header';

export default class EventLandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={style.landingPageContainer}>
        <Header
          title = {this.props.navigation.state.params.eventName}
          navigation = {this.props.navigation}
        />
        <View style={{ flex:0.85}}>
          <Text>
            Event Landing Page

          </Text>
        </View>
      </View>
    );
  }
}
