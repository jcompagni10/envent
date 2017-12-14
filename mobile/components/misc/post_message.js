import React from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';
import style from '../styles/messages';
import {postNewsMessage} from '../../util/api';

export default class PostMessage extends React.Component {
  constructor(){
    super();
    this.state = {
      message: '',
      title: ''
    };
  }

  handleChange(value, feild){
    this.setState({[feild]:value});
  }


  post(){
    if (!this.state.message){
      Alert.alert("Message Can't Be Blank");
      return;
    }
    if (!this.state.message){
      Alert.alert("Title Can't Be Blank");
      return;
    }
    postNewsMessage(this.props.eventId, this.state)
    .then(result=>{
      this.setState({message: '', title: ''});
      this.props.callback();
    });
  }

  render(){
    if (this.props.visible){
      return (
        <View style={style.postContainer}>
          <TextInput
            style= {style.postTitle}
            placeholder="Title"
            onChangeText={(title)=>this.handleChange(title, "title")}
            onSubmitEditing = {this.post.bind(this)}
            returnKeyType = "send"
            blurOnSubmit = {true}
            value= {this.state.title}
            multiline = {true}
          />
          <TextInput
            style= {style.postBody}
            placeholder="Post Event Message"
            value= {this.state.message}
            onChangeText={(message)=>this.handleChange(message, "message")}
            onSubmitEditing = {this.post.bind(this)}
            returnKeyType = "send"
            blurOnSubmit = {true}
          />
          <TouchableOpacity
            style={style.postButton}
            onPress={this.post.bind(this)}
          >
            <Text style ={style.postButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  }
}
