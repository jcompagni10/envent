import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  FlatList,
} from 'react-native';
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

  login(){
    fetch("http://192.168.3.37:3000/api/session/",{
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
          let sessionToken = responseBody.session_token;
          let email = responseBody.email;
          AsyncStorage.setItem('sessionToken', sessionToken);
          AsyncStorage.setItem('email', email);
          this.callback();
        })
      } else {
          this.setState({errors: ["Invalid Email/Password"]})
        }
      });
  }

  signup(){
    fetch("http://192.168.3.37:3000/api/users/",{
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
          let sessionToken = responseBody.session_token;
          let email = responseBody.email;
          AsyncStorage.setItem('sessionToken', sessionToken);
          AsyncStorage.setItem('email', email);
          this.callback();
        })
      } else {
        response.json()
        .then( responseBody => {
          debugger
          this.setState({errors: ["Invalid Email/Password"]});
        });}
      });
  }

  render (){
    if (this.props.visible){
      return (
        <View style={style.authBG}>
          <View style={style.authForm}>
            <Text style={style.authText}>
              Sign Up or Log In
            </Text>
            <Text style={style.errorText}>
            {this.state.errors}
            </Text>
            <View style={style.AuthInputWrapper}>
              <TextInput
                style= {style.authInput}
                placeholder="email"
                onChangeText={ email => this.handleChange({email}) }
                keyboardType= 'email-address'
                />
            </View>
            <View style={style.AuthInputWrapper}>
              <TextInput
                style= {style.authInput}
                placeholder="password"
                onChangeText={ password => this.handleChange({password}) }
                secureTextEntry = {true}
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
            <View style={style.skipContainer}>
              <TouchableOpacity
                style={style.skipButton}
                onPress={this.callback.bind(this)}
                >
                <Text style ={style.skipButtonText}>Skip</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
    return null;
  }
}
