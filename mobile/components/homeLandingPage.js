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
import {
  NavigationActions,
  DrawerNavigator,
} from 'react-navigation';
import EventLandingPage from './eventLandingPage';

export default class HomeLandingPage extends React.Component {
  static navigationOptions = {
    title: 'Change Events'
  };

  constructor(props) {
    super(props);
    this.state = {
      eventTag: "",
      eventId: undefined,
    };

    
    this.findEventFromInput = this.findEventFromInput.bind(this);
    this.handleEventPress = this.handleEventPress.bind(this);
    this.updateStateAndFindEvent = this.updateStateAndFindEvent.bind(this);
  }

    findEventFromInput() {
    // TODO1 fetch address is hard coded in as Taylor's local IP
    return fetch(`http://192.168.3.21:3000/api/events/${this.state.eventTag}`)
      .then(response => response.json())
      .then(responseJson => {
        this.state.eventId = responseJson.id;
        return responseJson.id;
      });
      // .catch(error => {
      //   Alert.alert(`${error}`);
      // });
    }
    
  handleEventPress() {
    this.props.navigation.navigate('EventLandingPage', { eventId: this.state.eventId });

  }


  updateStateAndFindEvent(eventTag) {
    this.setState({ eventTag });
    this.findEventFromInput();
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TextInput
          style={{ height: 60, }}
          placeholder="Event Tag"
          // Ajax request is handled on text change - needs to happen on submission
          onChangeText={ eventTag => this.updateStateAndFindEvent(eventTag) }
        />
        <Button
          onPress={this.handleEventPress}
          title="Next"
        />
      </View>
    );
  }
}