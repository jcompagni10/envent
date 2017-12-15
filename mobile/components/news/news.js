import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  FlatList,
  KeyboardAvoidingView
} from 'react-native';
import AppHeader from '../header';
import {fetchModuleData} from '../../util/api';
import Loader from '../misc/loader';
import style from '../styles/messages';
import {currentUser} from '../../util/user';
import PostMessage from '../misc/post_message';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      isLoading: true,
    };
  }

  componentWillMount(){
    currentUser()
      .then(user=>(this.setState({user})));
    let eventId = this.props.navigation.state.params.eventId;
    this.state["eventId"] = eventId;
    this.fetchNews(eventId);
  }


  listStyle(){
    return (this.isAdmin()) ? style.listWrapperPostable : style.listWrapper;
  }

  fetchNews(eventId = null){
    eventId = this.state.eventId || eventId;
    return fetchModuleData(eventId, "news")
      .then(data =>{
        this.setState({
          newsItems: data.by_id,
          admin: data.admin,
          newsIds: data.all_ids,
          isLoading: false,
        });
      });
  }

  isAdmin(){
    return (this.state.user && this.state.admin === this.state.user.email);
  }

  succcesfulPost(){
    this.fetchNews().then(()=>{
      this.refs.PostList.scrollToOffset(0);
    });
  }
  _renderListItem(item){
    let data = this.state.newsItems[item];
    return (
      <View style={style.listItemWrapper}>
        <View style={style.listItem}>
          <Text style={style.itemTitle}>
            {data.title}
          </Text>
          {(data.img_url) ?
            (
              <View style={style.imageWrapper}>
                <Image
                  source = {{uri: data.img_url}}
                  style ={style.itemImage} />
              </View>
            )
                :
              null }
          <Text style={style.newsText}>
            {data.message}
          </Text>
          <View style={style.postTime}>
            <Text style={style.postTimeText}>
              posted {data.posted_time}
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
        <KeyboardAvoidingView style={style.fullPage}
          behavior="position"
          keyboardVerticalOffset ={70}>
        <AppHeader
          title = {"News"}
          navigation = {this.props.navigation}
        />
      <View style={this.listStyle()}>
            <FlatList
              ref= "PostList"
              renderItem={({item}) => this._renderListItem(item)}
              data = {this.state.newsIds}
              keyExtractor={(item, index) => index}
            />
          </View>
            <PostMessage
              type = "news"
              visible = {this.isAdmin()}
              eventId = {this.state.eventId}
              callback = {this.succcesfulPost.bind(this)}
              />
        </KeyboardAvoidingView>
    );
  }
}
