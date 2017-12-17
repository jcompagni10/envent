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
import Loader from './misc/loader';
// import {findEventFromInput} from '../util/api';
export default class HomeLandingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      eventTag: "",
      eventId: undefined,
      showAuth: false,
      isLoading: true
    };
    this.findEventFromInput = this.findEventFromInput.bind(this);
  }

  componentDidMount(){
    StatusBar.setHidden(true);
      try {
        AsyncStorage.getItem('eventTag')
          .then(tag=>this.handleDBTag(tag));
      } catch (error) {
        Alert.alert(error);
      }

  }

  findEventFromInput(eventTag) {
    // TODO1 Add logic if failed response
    const END_POINT = "http://192.168.3.21:3000";
    return fetch(END_POINT+"/api/events/"+eventTag+"/?mobile=true")
      .then(
        (response) => {
          this.setState({isLoading: false});
          if (response.status === 200){
            return response.json();
          } else{
            throw new Error(response.statusText);
          }
        })
      .catch(error => {
        this.setState({
          status: "Event Not Found",
          showAuth: false,
          isLoading: false
        });
      });
  }

  handleTagSubmit(){
    this.setState({status: ''});
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
        this.enterEvent(event);
      });
    } else{
      this.setState({isLoading: false});
    }
  }

  closeAuth(){
    this.setState({showAuth: false});
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
    if (this.state.status !== '') return;
    AsyncStorage.getItem('userEmail').then(email=>{
      if (email){
        this.enterEvent(event);
      } else {
        this.setState({
          showAuth: true,
          status: '',
          event
        });
      }
    });
  }


  enterEvent(passedEvent= null) {
    let event = passedEvent || this.state.event;
    this.setState({showAuth: false});
    this.storeEventTag();
    this.props.navigation.navigate(
      'Router',
      // TODO1: fix code to get rid of need for redundant properties
      {
        items: event.display_elements,
        eventName: event.name,
        eventId: event.id,
        event
       }
    );
  }


  handleChange(eventTag) {
    this.setState({ eventTag });
  }

  render() {
    if (this.state.isLoading){
      return (
        <Loader />
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
          skip = {true}
          close = {this.closeAuth.bind(this)}
          />
      </View>
    );
  }
}

// Photo by Ezra Jeffrey
