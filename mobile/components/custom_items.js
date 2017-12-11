import React from 'react';
import {
View,
FlatList,
Text,
Button,
Alert
} from 'react-native';


export default class CustomItems extends React.Component {

  handleClick(component){
    this.props.navigation.navigate(component);
  }

  toHome(){
    this.props.navigation.navigate("Home");
  }


  render(){
    return (
      <View>
        <Button
          onPress = {this.toHome.bind(this)}
          title="New Event"
          />
        <FlatList
          data = {this.props.navigation.state.params.items}
          renderItem = {({item}) =>
            <Button
              onPress = {()=>this.handleClick(item.component)}
              title = {item.title}
              key = {item.title}
            /> }
          />
      </View>
    );
  }
}
