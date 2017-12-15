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
    const event = this.props.navigation.state.params.event;
    return (
      <View style={style.landingPageContainer}>
        <Header
          title = {event.name}
          navigation = {this.props.navigation}
        />
        <View style={{ flex:0.85}}>
          <Text>
            Event Landing Page
            this.
          </Text>
        </View>
      </View>
    );
  }
}
