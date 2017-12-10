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
