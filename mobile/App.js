import React from 'react';
import { StyleSheet, Text, View, Image, TextInput , Alert, Button, ListView, ActivityIndicator} from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: "",
      isLoading: true
    };
  }

  componentDidMount(){
    return fetch("https://code-ninjas.herokuapp.com/api/level_sets")
    .then(response => response.json())
    .then(responseJson => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({data: ds.cloneWithRows(responseJson.by_id), isLoading: false});
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
          <ListView dataSource = {this.state.data}
            renderRow = {(level) => <Text>{level.name}</Text>}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    flexDirection: "column"
  },
  photo: {
    flex: 4
  }
});
