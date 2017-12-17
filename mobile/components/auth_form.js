import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  FlatList,
  Alert,
  Keyboard
} from 'react-native';
import {persistUser} from '../util/user';
import style from './styles/auth_form.js';


export default class AuthForm extends React.Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      errors: []
    };

  }

  callback(){
    this.props.callback();
  }

  handleChange(newValue){
    this.setState(newValue);
  }

  closeKeyboard(){
    Keyboard.dismiss();
  }

  login(){
    fetch("http://192.168.3.21:3000/api/session/",{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: this.state
      })
    })
    .then(response => {
      if (response.status === 200){
        response.json()
        .then( responseBody => {
          persistUser(responseBody);
          this.callback();
        })
      } else {
          this.setState({errors: ["Invalid Email/Password"]});
        }
      });
  }

  signup(){
    fetch("http://192.168.3.21:3000/api/users/",{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: this.state
      })
    })
    .then(response => {
      if (response.status === 200){
        response.json()
        .then( responseBody => {
          persistUser(responseBody);
          this.callback();
        });
      } else {
        response.json()
        .then( responseBody => {
          this.setState({errors: responseBody});
        });}
      });
  }


  render (){
    if (this.props.visible){
      return (
        <View style={style.authBG}>
          <View style={style.authForm}>
            <TouchableOpacity
              style={style.closeButtonWrapper}
              onPress={this.props.close}
            >
              <Text style ={style.closeButton}>X</Text>
            </TouchableOpacity>
            <Text style={style.authText}>
              Sign Up or Log In
            </Text>
            <FlatList
              style = {style.errors}
              data = {this.state.errors}
              renderItem = {({item}) =>
                <View>
                  <Text style={style.errorText}>
                  {"-"+item}
                  </Text>
                </View>
              }
              keyExtractor={(item, index) => index}
            />
            <View style={style.AuthInputWrapper}>
              <TextInput
                style= {style.authInput}
                placeholder="email"
                onChangeText={ email => this.handleChange({email}) }
                keyboardType= 'email-address'
                returnKeyType = "next"
                onSubmitEditing = {(event) => {
                  this.refs.passwordInput.focus();
                }}
              />
            </View>
            <View style={style.AuthInputWrapper}>
              <TextInput
                ref='passwordInput'
                style= {style.authInput}
                placeholder="password"
                onChangeText={ password => this.handleChange({password}) }
                secureTextEntry = {true}
                onSubmitEditing = {this.login.bind(this)}
                returnKeyType = "go"
                />
            </View>
            <View style={style.bottomButtons}>
              <TouchableOpacity
                style={style.authButton}
                onPress={this.signup.bind(this)}
              >
                <Text style ={style.authButtonText}>Sign Up</Text>
              </TouchableOpacity>
              <Text style={style.or}>Or</Text>
              <TouchableOpacity
                style={style.authButton}
                onPress={this.login.bind(this)}
              >
                <Text style ={style.authButtonText}>Log In</Text>
              </TouchableOpacity>
            </View>
            {(this.props.skip )? (
              <View style={style.skipContainer}>
                <TouchableOpacity
                  style={style.skipButton}
                  onPress={this.callback.bind(this)}
                  >
                  <Text style ={style.skipButtonText}>Skip</Text>
                </TouchableOpacity>
              </View>
            ) : null }
          </View>
        </View>
      );
    }
    return null;
  }
}
