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
  TouchableHighlight,
} from 'react-native';
import Header from '../header';

export default class Schedule extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Header
          title = {"Schedule"}
          navigation = {this.props.navigation}
        />
        <View>
          <Text>
            Schedule
          </Text>
        </View>
      </View>
    );
  }
}
