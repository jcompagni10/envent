import React from 'react';
import { StyleSheet, Text, View, Image, TextInput , Alert, Button, ListView, ActivityIndicator} from 'react-native';
import Event from './event';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: "",
      isLoading: true
    };
  }

  componentDidMount(){
    return fetch("http://169.254.210.106:3000/api/events")
    .then(response => response.json())
    .then(responseJson => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({data: ds.cloneWithRows(responseJson), isLoading: false});
    });
  }
  render() {
    if (this.state.isLoading){
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <View style = {styles.container}>
        <Text> EVENTS </Text>
          <ListView dataSource = {this.state.data}
            renderRow = {(event) => <Text>{event.name}</Text>}
          />
        <Event />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    flexDirection: "column"
  },
  photo: {
    flex: 4
  }
});
