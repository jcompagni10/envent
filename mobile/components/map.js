import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  AppRegistry
} from 'react-native';

export default class Map extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    };
  }

  //TODO1 backend
  componentDidMount(){
    return fetch(/*backend call for map upload*/);

  }

  render (){
    return(
      <View>
        <Text>Map</Text>
        <Image
          
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
