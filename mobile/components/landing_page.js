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
  AsyncStorage
} from 'react-native';
import {
  NavigationActions,
  DrawerNavigator,
} from 'react-navigation';

import style from './styles/landing_page.js';


export default class HomeLandingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      eventTag: "",
      eventId: undefined,
      isLoading: true
    };
    this.findEventFromInput = this.findEventFromInput.bind(this);
  }

  componentDidMount(){
    this.setState({isLoading: true});
    StatusBar.setHidden(true);
      try {
        AsyncStorage.getItem('eventTag')
          .then(tag=>this.handleDBTag(tag));
      } catch (error) {
        Alert.alert(error);
      }
  }

  handleDBTag(tag){
    if (tag){
      this.state['eventTag'] = tag;
      this.findEventFromInput(tag);
    } else{
      this.setState({isLoading: false});
    }
  }

  findEventFromInput(tag = null) {
    // TODO1 Add logic if failed response

    let eventTag = tag || this.state.eventTag;
    fetch("http://192.168.3.37:3000/api/events/"+eventTag)
      .then((response) => response.json())
      .then(this.enterEvent.bind(this))
      .catch(error => {
        debugger
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
    return navItems;
  }

  storeEventTag(){
    try {
      AsyncStorage.setItem('eventTag', this.state.eventTag, ()=>{
      });
    } catch (error){
      Alert.alert(error);
    }
  }

  enterEvent(event) {
      this.storeEventTag();
      // let navItems = this.buildNav(event.display_elements);
      this.props.navigation.navigate(
        'Router',
        {
          items: event.display_elements,
          eventName: event.name
         }
      );
  }


  handleChange(eventTag) {
    this.setState({ eventTag });
  }

  render() {
    if (this.state.isLoading){
      return (
        // TODO2: make this sexier
        <View style={style.landingPageContainer}>
          <ActivityIndicator
            size='large'
            color="#4abdac"/>
        </View>
      );
    }
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
              onChangeText={ eventTag => this.handleChange(eventTag) }
              onSubmitEditing = {()=>this.findEventFromInput()}
              returnKeyType = "join"
            />
            <TouchableOpacity
              style={style.joinButton}
              onPress={()=>this.findEventFromInput()}
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
