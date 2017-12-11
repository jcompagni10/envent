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
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  NavigationActions,
  DrawerNavigator,
} from 'react-navigation';

import style from './styles/landing_page.js';


const moduleNames = {Schedule: 'Schedule', News: "News", MessageBoard: "Message Board"}

export default class HomeLandingPage extends React.Component {
  static navigationOptions = {
    title: 'Change Events',
    status: ''
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
        this.setState({status: "Event Not Found"})
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
      let navItems = this.buildNav(event.display_elements);
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

  componentDidMount(){
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <View style={style.landingPageContainer} >
        <Image
          source={require('./../assets/crowd.jpg')}
          style={style.backgroundImage}
        />
        <View style ={style.logoWrapper} >
          <Image
          source={require('./../assets/logo.png')}
          style={style.logo}
          />
        </View>
        <View style ={style.entryForm}>
          <Text style = {style.statusText}>
          {this.state.status}
          </Text>
          <View style = {style.tagBar}>
            <TextInput
              style={style.tagInput}
              placeholder="Event Tag"
              onChangeText={ eventTag => this.updateStateAndFindEvent(eventTag) }
              onSubmitEditing = {this.findEventFromInput}
              returnKeyType = "join"
            />
            <TouchableOpacity
              style={style.joinButton}
              onPress={()=>this.findEventFromInput(this.handleEventPress)}
            >
              <Text style ={style.joinButtonText}>Join</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

// Photo by Ezra Jeffrey
