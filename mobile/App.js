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
  ActivityIndicator
} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      eventTag: "",
    };
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
    .then( responseJson => {
      Alert.alert(`${responseJson}`);
    })
    .catch( error => {
      Alert.alert(`${error}`);
    });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TextInput 
          style={{ height: 40, }}
          placeholder="Event Tag"
          onChangeText={ eventTag => this.setState({eventTag})}
        />
        <Button
          onPress={ () => this.findEventFromInput(this.state.eventTag) }
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
