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

const moduleNames = {Schedule: 'Schedule', News: "News", MessageBoard: "Message Board"}

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



  findEventFromInput(callback) {
    // TODO1 Add logic if failed response
    fetch("http://192.168.3.37:3000/api/events/"+this.state.eventTag, )
      .then((response) => response.json())
      .then(this.handleEventPress)

      .catch(error => {
        Alert.alert(error);
      });
    }

  buildNav(elements){
    let navItems = [];
    elements.forEach(element => (
      navItems.push({
        title: moduleNames[element],
        component: element
    }
    )));
    return navItems
  }

  handleEventPress(event) {
    // this.findEventFromInput(
      // Alert.alert(event.name)
      let navItems = this.buildNav(event.display_elements);
      debugger
      this.props.navigation.navigate(
        'Router',
        {
          items: navItems,
          eventName: event.name
         }
      )
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
          onSubmitEditing = {this.findEventFromInput}
          returnKeyType = "join"
        />
        <Button
          type ="submit"
          onPress={()=>this.findEventFromInput(this.handleEventPress)}
          title="Next"
        />
      </View>
    );
  }
}
