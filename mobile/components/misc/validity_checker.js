import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import style from '../styles/validity_checker.js';


export default class ValidityChecker extends React.Component {
  constructor(){
    super();
    this.state = {
      statusCode: 0,
      validState: new Animated.Value(200)
    };

  }


  handleAction(){
    this.setState({statusCode: this.state.statusCode + 1 });
    Animated.sequence([
      Animated.timing(
      this.state.validState,
      {
        toValue: 220,
        duration: 40
    }),
      Animated.timing(
      this.state.validState,
      {
        toValue: 200,
        duration: 40
    }),
  ]
  ).start();
  }

  render (){
    let { validState } = this.state;
    if (!this.props.validity){
      return (
        <View style={style.background}>
          <TouchableOpacity
            style={style.closeContainer}
            onPress ={this.props.callback}
            >
            <Text style={style.close}>
              X
            </Text>
          </TouchableOpacity>
          <Text style= {style.statusCode}>
            {this.state.statusCode}
          </Text>
          <TouchableWithoutFeedback
            onPress = {this.handleAction.bind(this)}
          >

          <Animated.Image
            source={require('../../assets/validity_display.png')}
            style={{
              height:validState,
              width:validState}} />
          </TouchableWithoutFeedback>
        </View>
      );
    }
    return null;
  }
}
