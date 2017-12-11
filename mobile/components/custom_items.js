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
  
  render(){
    return (
      <View>
        <FlatList
          data = {this.props.navigation.state.params.items}
          renderItem = {({item}) =>
            <Button
              onPress = {()=>this.handleClick(item.component)}
              title = {item.title}
            /> }
          />
      </View>
    );
  }
}
