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
import Router from './router';
import Schedule from './schedule/schedule';
import News from './news/news';
import MessageBoard from './messageBoard/messageBoard';


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

    this.drawerRoutes = {
      EventLandingPage: {
        screen: EventLandingPage,
      },
      Schedule: {
        screen: Schedule,
      },
      News: {
        screen: News,
      },
      MessageBoard: {
        screen: MessageBoard,
      },
    };

    
    this.findEventFromInput = this.findEventFromInput.bind(this);
    this.handleEventPress = this.handleEventPress.bind(this);
    this.updateStateAndFindEvent = this.updateStateAndFindEvent.bind(this);
  }

  

  findEventFromInput(callback) {
    // TODO1 Add logic if failed response
    fetch(`http://192.168.3.21:3000/api/events/${this.state.eventTag}`)
      .then(response => response.json())
      .then(responseJson => {
        callback(responseJson.id);
      })
      // .catch(error => {
      //   Alert.alert(`${error}`);
      // });
    }
    
  handleEventPress(eventId) {
    // this.findEventFromInput(
      this.props.navigation.navigate(
        'Router',
        { eventId: eventId,
          drawerRoutes: this.drawerRoutes
         }
      )
    // );
  }


  updateStateAndFindEvent(eventTag) {
    this.setState({ eventTag });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TextInput
          style={{ height: 60, }}
          placeholder="Event Tag"
          onChangeText={ eventTag => this.updateStateAndFindEvent(eventTag) }
        />
        <Button
          // onPress={() => this.findEventFromInput(this.handleEventPress)}
          onPress={() => this.handleEventPress()}
          title="Next"
        />
      </View>
    );
  }
}