import React from 'react';
import {Header} from 'react-native-elements';
import style from './styles/header.js';


export default class AppHeader extends React.Component {

  openDrawer(){
    this.props.navigation.navigate('DrawerToggle');
  }

  headerStyle(){
    let base = {
      top: 70,
      zIndex: 1,
      borderBottomWidth: 0
    };
    if (this.props.scrolledUp === true){
      return Object.assign(base, {borderBottomWidth: 1 });
    }
    return base;
  }

  render(){
    if (this.props.landingPage){
      let iconColor = (this.props.scrolledUp) ? "#000" : '#fff'
      return (
        <Header
          leftComponent={
            { icon: 'menu', color: iconColor, onPress: this.openDrawer.bind(this)}
          }
          centerComponent={
            { text: this.props.title, style: style.headerTitle}
          }
          backgroundColor = "rgba(0,0,0,0)"
          outerContainerStyles={this.headerStyle()}
          />
      );
    }
    return (
      <Header
        leftComponent={
          { icon: 'menu', color: '#000', onPress: this.openDrawer.bind(this)}
        }
        centerComponent={
          { text: this.props.title, style: style.headerTitle}
        }
        backgroundColor = "#FFF"
        outerContainerStyles={style.headerContainer}
      />
    );
  }

}
