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

export default class EventLandingPage extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Event',
  };
  
  constructor(props) {
    super(props);
  }

  render() {
    // debugger
    return (
      <View style={{ flex:1, justifyContent:"center", alignItems: "stretch", backgroundColor: 'powderblue' }}>
      
      {/* So the iOS info at the top doesn't overlap our info (signal, time, battery) */}
        <View style={{ flex: 0.05 }}> 
        
        {/* nav bar header */}
        </View>
        <View style={{ flex: 0.1, flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('DrawerToggle')}
          >
            <Image
              source={require('./../assets/hamburger.jpg')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableHighlight>
          <Text>Event Home</Text>
          <Text></Text>
        </View>

        {/* body */}
        <View style={{ flex:0.85}}>
          <Text>
            Event Landing Page
            
            {`${this.props.navigation.state.eventId}`}
          </Text>
        </View>
      </View>
    );
  }
}