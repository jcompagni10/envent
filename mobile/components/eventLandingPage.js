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
  NavigatorIOS,
} from 'react-native';

export default class EventLandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger;
    return (
      <View style={{ flex:1, justifyContent:"center", alignItems: "center", backgroundColor: 'powderblue' }}>
        <Text>
          You made it
          
          {`${this.props.eventId}`}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: "column"
  },
  photo: {
    flex: 4
  }
});
