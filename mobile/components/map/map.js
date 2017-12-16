import React from 'react';
import {
  StyleSheet,
  View,
  AppRegistry
} from 'react-native';
import Loader from '../misc/loader';
import style from '../styles/map';
import Header from '../header';
import Image from 'react-native-transformable-image-next';

export default class Map extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    };
  }

  handleLoad(){
    this.setState({isLoading: false})
  }
  componentDidMount(){
    this.setState({isLoading: false});
  }

  render (){
    if (this.state.isLoading){
      return (
        <Loader />
      );
    }
    return(
      <View>
        <Header
          // TODO: MAP TITLE
          title = {"Map"}
          navigation = {this.props.navigation}
        />
      <View style={style.mapContainer}>
        <Image
            source = {{uri: "https://www.sfoutsidelands.com/uploads/ol17-festival-map-2200-1200.jpg"}}
            style = {style.map}
          />
      </View>
    </View>
    );
  }
}
