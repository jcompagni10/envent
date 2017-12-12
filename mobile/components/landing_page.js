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
  AsyncStorage,
  ImageBackground
} from 'react-native';
import {
  NavigationActions,
  DrawerNavigator,
} from 'react-navigation';

import style from './styles/landing_page.js';
import AuthForm from './auth_form';

export default class HomeLandingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      eventTag: "",
      eventId: undefined,
      isLoading: true,
      showAuth: false
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

  handleTagSubmit(){
    let eventTag = this.state.eventTag;
    if (eventTag){
      this.findEventFromInput(eventTag)
      .then((event)=>this.displayAuth(event));
    }else {
      this.setState({
        status: "Event Tag Cannot Be Blank",
        showAuth: false
      });
      return;
    }
  }

  handleDBTag(tag){
    if (tag){
      this.state['eventTag'] = tag;
      this.findEventFromInput(tag)
      .then((event)=>{
        this.state.event = event;
        this.enterEvent();
      });
    } else{

      this.setState({isLoading: false});
    }
  }

  findEventFromInput(eventTag) {
    // TODO1 Add logic if failed response
    return fetch("http://192.168.3.37:3000/api/events/"+eventTag)
      .then(
        (response) => {
          if (response.status === 200){
            return response.json();
          } else{

            throw new Error(response.statusText);
          }
        })
      .catch(error => {
        this.setState({
          status: "Event Not Found",
          showAuth: false
        });
      });
    }


  storeEventTag(){
    try {
      AsyncStorage.setItem('eventTag', this.state.eventTag, ()=>{
      });
    } catch (error){
      Alert.alert(error);
    }
  }

  displayAuth(event){
    this.setState({
      showAuth: true,
      status: '',
      event
    });
  }
  enterEvent() {
    let event = this.state.event;
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
      <View style={{flex:1}}>
        <ImageBackground
          source={require('./../assets/crowd.jpg')}
          style={style.backgroundImage}
        >
          <Image
            source={require('./../assets/logo.png')}
            style={style.logo}
            />
          <View style ={style.entryForm}>
            <View style = {style.tagBar}>
              <TextInput
                style={style.tagInput}
                placeholder="Event Tag"
                onChangeText={ eventTag => this.handleChange(eventTag) }
                onSubmitEditing = {()=>this.handleTagSubmit()}
                returnKeyType = "join"
              />
              <TouchableOpacity
                style={style.joinButton}
                onPress={()=>this.handleTagSubmit()}
              >
                <Text style ={style.joinButtonText}>Join</Text>
              </TouchableOpacity>
            </View>
            <Text style = {style.statusText}>
              {this.state.status}
            </Text>
          </View>
        </ImageBackground>
        <AuthForm
          visible = {this.state.showAuth}
          callback = {this.enterEvent.bind(this)}
          />
      </View>
    );
  }
}

// Photo by Ezra Jeffrey
