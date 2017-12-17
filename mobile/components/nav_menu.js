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
import {signOut, currentUser} from '../util/user';
import AuthForm from './auth_form';

const modules = {
  EventLandingPage:
    {title: 'Home', icon: 'home' },
  Schedule:
    {title: 'Schedule', icon: 'calendar'},
  News:
    {title: "News", icon: 'news'},
  MessageBoard:
    {title: "Message Board", icon: "chat"},
  Ticket:
    {title: "Ticket", icon: "ticket"},
  Map:
    {title: "Map", icon: "map"}
};

export default class CustomItems extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  checkForCurrentUser(){
    currentUser().then(user=>{
      this.setState({user});
    });
  }

  componentWillMount(){
    this.checkForCurrentUser();
  }
  componentWillReceiveProps(newProps){
    //TODO2 come up with a more efficient way to check current user state
    this.checkForCurrentUser();
  }

  handleClick(module){
    this.props.navigation.navigate(module);
  }

  navItems(){
    return ["EventLandingPage"].concat(this.props.navigation.state.params.items);
  }

  toLanding(){
    AsyncStorage.setItem('eventTag', "", ()=>{
      this.props.navigation.navigate("Home");
    });
  }

  accountAction(){
    if (this.state.user){
       signOut();
       this.toLanding();
    } else {
      this.props.navigation.navigate("SignIn");
    }
  }


  render(){
    return (
        <SafeAreaView
          forceInset={{ top: 'always', horizontal: 'never' }}
          style= {style.navMenuWrapper}
          >
          <View style= {style.navMenu} >

          <FlatList
            data = {this.navItems()}
            renderItem = {({item}) =>
            <TouchableOpacity
                style= {style.navItem}
                onPress = {()=>this.handleClick(item)}
              >
                <Icon
                  name = {modules[item].icon}
                  size = {17}
                  reverse = {true}
                  type = 'entypo'
                  raised

                  color = '#4abdac' />
                <Text style={style.navTitle}>
                  {modules[item].title}
                </Text>
              </TouchableOpacity>
            }
            keyExtractor={(item, index) => index}
          />
            <TouchableOpacity
              style= {style.accountBtn}
              onPress = {this.accountAction.bind(this)}
             >
              <Icon
                style = {style.button}
                name = "account"
                type = "material-community"
                reverse = {true}
                raised
                size = {17}
                color = '#4abdac' />
              <Text style={style.navTitle}>
              {  (this.state.user) ? "Log Out" : "Sign In"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style = {style.homeBtn} >
            <Button
              onPress = {this.toLanding.bind(this)}
              title = "Log In To Another Event"
              color = {'#aaa'}
              />
          </View>
        </SafeAreaView>
    );
  }
}
