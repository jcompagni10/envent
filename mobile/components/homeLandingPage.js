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
import EventLandingPage from './eventLandingPage';

export default class HomeLandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventTag: "",
      eventId: undefined,
    };
    
    this.findEventFromInput = this.findEventFromInput.bind(this);
    this.redirectToEventLandingPage = this.redirectToEventLandingPage.bind(this);
    this.handleEventPress = this.handleEventPress.bind(this);
    this.updateStateAndFindEvent = this.updateStateAndFindEvent.bind(this);
  }

  // componentDidMount(){
  //   return fetch("https://code-ninjas.herokuapp.com/api/level_sets")
  //   .then(response => response.json())
  //   .then(responseJson => {
  //     let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //     this.setState({data: ds.cloneWithRows(responseJson.by_id), isLoading: false});
  //   });
  // }

    findEventFromInput() {
    // TODO1 fetch address is hard coded in as Taylor's local IP

    return fetch(`http://192.168.3.21:3000/api/events/${this.state.eventTag}`)
      .then(response => response.json())
      .then(responseJson => {
        this.state.eventId = responseJson.id;
        // Alert.alert(`${this.state.eventId}`);
        return responseJson.id;
      });
      // .catch(error => {
      //   Alert.alert(`${error}`);
      // });
    }

  redirectToEventLandingPage(eventId) {
    let nextRoute = {
      component: EventLandingPage,
      title: "Event Landing Page",
      passProps: {
        // eventId: "2",
        eventId: eventId,
      },
    };
    
    this.props.navigator.push(nextRoute);
  }
    
  handleEventPress() {
    this.findEventFromInput().then( eventId => this.redirectToEventLandingPage(eventId));
    // this.redirectToEventLandingPage();
  }

  updateStateAndFindEvent(eventTag) {
    this.setState({ eventTag });
    this.findEventFromInput();
  }

  render() {

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TextInput
          style={{ height: 60, }}
          placeholder="Event Tag"
          // Ajax request is handled on text change - needs to happen on submission
          onChangeText={ eventTag => this.updateStateAndFindEvent(eventTag) }
        />
        <Button
          onPress={this.handleEventPress}
          title="Next"
        />
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
