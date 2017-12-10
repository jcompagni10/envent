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
    return (
      <View style={{ flex:1, justifyContent:"center", alignItems: "center", backgroundColor: 'powderblue' }}>
        <View style={{ flex: 0.05 }}>
        </View>
        <View style={{ flex: 0.1 }}>
          <Image source={require('./assets/check.png')} />
          <Text>Event Home</Text>
          <Text></Text>
        </View>
        <View style={{ flex:0.85}}>
          <Text>
            You made it
            
            {`${this.props.navigation.state.params.eventId}`}
          </Text>
        </View>
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
