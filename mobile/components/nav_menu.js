import React from 'react';
import {
View,
FlatList,
Text,
Button,
TouchableOpacity,
SafeAreaView,
AsyncStorage
} from 'react-native';
import { Icon } from 'react-native-elements';
import style from './styles/nav_menu';

const modules = {
  Schedule:
    {title: 'Schedule', icon: 'map'},
  News:
    {title: "News", icon: 'announcement'},
  MessageBoard:
    {title: "Message Board", icon: "message"}
};

export default class CustomItems extends React.Component {

  handleClick(module){
    this.props.navigation.navigate(module);
  }

  newEvent(){
    AsyncStorage.setItem('eventTag', "", ()=>{
      this.props.navigation.navigate("Home");
    });
  }


  render(){
    return (
      <SafeAreaView
        forceInset={{ top: 'always', horizontal: 'never' }}
        style= {style.navMenu}
        >
        <View style= {style.navMenu} >

        <FlatList
          data = {this.props.navigation.state.params.items}
          renderItem = {({item}) =>
          <TouchableOpacity
              style= {style.navItem}
              onPress = {()=>this.handleClick(item)}
            >
              <Icon
                name = {modules[item].icon}
                reverse = {true}
                color = '#4abdac' />
              <Text style={style.navTitle}>
                {modules[item].title}
              </Text>
            </TouchableOpacity>
          }
          keyExtractor={(item, index) => index}
        />
        <View style = {style.homeBtn} >
          <Button
            onPress = {this.newEvent.bind(this)}
            title = "Log In To Another Event"
            color = {'#000'}
            />
        </View>
        </View>
      </SafeAreaView>
    );
  }
}
