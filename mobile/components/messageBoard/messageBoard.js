import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  FlatList,
  Alert,
  KeyboardAvoidingView,
  ActivityIndicator,
  RefreshControl
} from 'react-native';
import AppHeader from '../header';
import {fetchModuleData} from '../../util/api';
import Loader from '../misc/loader';
import style from '../styles/messages';
import {currentUser} from '../../util/user';
import PostMessage from '../misc/post_message';
import AuthForm from '../auth_form';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      isLoading: true,
      fetching: false,
      showAuth: false,
    };
  }

  componentWillMount(){
    currentUser()
      .then(user=>(this.setState({user})));
    let eventId = this.props.navigation.state.params.eventId;
    this.state["eventId"] = eventId;
    this.fetchPosts(eventId);
  }

  showAuth(){
    this.setState({showAuth: true});
  }

  closeAuth(){
    this.setState({showAuth: false});
  }

  succesfulLogin(){
    this.closeAuth();
    currentUser()
      .then(user=>{
        this.setState({user});
        //force navdrawer to rerender
        this.props.navigation.navigate('MessageBoard', {user});
      });
  }

  fetchPosts(eventId = null){
    eventId = this.state.eventId || eventId;
    let offset;
    if (this.state.postIds){
      offset = this.state.postIds.length;
    }
    return fetchModuleData(eventId, "messages", offset)
      .then(data =>{
        let newPostIds = this.state.postIds || [];
        newPostIds = data.all_ids.concat(newPostIds);

        this.setState({
          posts: Object.assign({}, this.state.posts, data.by_id),
          postIds: newPostIds,
          isLoading: false,
          refreshing: false
        });
      });
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.fetchPosts().then(() => {
      this.setState({refreshing: false});
    });
  }

  _getItemLayout(data, index){
    const height = 99;
    return {
      length: height,
      offset: height * index,
      index
    };
  }

  overScroll(){
    this.fetchPosts();
  }

  listStyle(){
    return (this.isLoggedIn()) ? style.listWrapperPostable : style.listWrapper;
  }

  isLoggedIn(){
    return (this.state.user);
  }

  succcesfulPost(){
    this.fetchPosts().then(()=>{
      this.refs.PostList.scrollToOffset(10);
    });
  }
  _renderListItem(item){
    let data = this.state.posts[item];
    return (
      <View style={style.listItemWrapper}>
        <View style={style.listItem}>
          <Text style={style.posterName}>
            {data.author_username} says
          </Text>
          <Text style={style.newsText}>
            {data.body}
          </Text>
          <View style={style.postTime}>
            <Text style={style.postTimeText}>
              {data.posted_time}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    if (this.state.isLoading){
      return (
        <Loader />
      );
    }
    return (
    <View style={style.container}>
      <KeyboardAvoidingView style={style.fullPage}
        behavior="position"
        keyboardVerticalOffset ={70}>
        <AppHeader
          title = {"Message Board"}
          navigation = {this.props.navigation}
        />
      <View style={this.listStyle()}>
        <FlatList
          ref= "PostList"
          getItemLayout = {this._getItemLayout}
          onEndReached = {this.overScroll.bind(this)}
          onEndReachedThreshold = {0}
          inverted = {true}
          refreshControl={
            <RefreshControl
              colors ={["#4abdac", 'red']}
              progressBackground ={"red"}
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
          renderItem={({item}) => this._renderListItem(item)}
          data = {this.state.postIds}
          keyExtractor={(item, index) => index}
        />
      </View>
      <PostMessage
        user = {this.state.user}
        visible = {this.isLoggedIn()}
        eventId = {this.state.eventId}
        callback = {this.succcesfulPost.bind(this)}
        type = "messageBoard"
        />
      {this.isLoggedIn() ? null :
        (
        <View style= {style.loginReqContainer}>
          <Button
            fontSize = {15}
            color ='#4abdac'
            title = "Log In"
            onPress = {this.showAuth.bind(this)}
          />
          <Text style = {style.loginReq}>
            To Post...
          </Text>
        </View>
        )
      }
      </KeyboardAvoidingView>
      <AuthForm
        visible = {this.state.showAuth}
        close = {this.closeAuth.bind(this)}
        callback = {this.succesfulLogin.bind(this)}
        />
    </View>
    );
  }
}
