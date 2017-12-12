import React from 'react';
import {Header} from 'react-native-elements';
import style from './styles/header.js';


export default class AppHeader extends React.Component {
  
  openDrawer(){
    this.props.navigation.navigate('DrawerToggle');
  }

  render(){
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
