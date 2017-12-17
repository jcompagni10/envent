import React from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Keyboard
} from 'react-native';
import style from '../styles/messages';
import {postNewsMessage, postMessage} from '../../util/api';

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

  postBodyStyle(){
    let base = {
      width: '100%',
      height: 55,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
    };
    if (this.props.type === "messageBoard"){
      Object.assign(base, {height: 85});
    }
    return base;
  }
  post(){
    if (!this.state.title && this.props.type !=="messageBoard"){
      Alert.alert("Message Can't Be Blank");
      return;
    }
    if (!this.state.message){
      Alert.alert("Message Can't Be Blank");
      return;
    }
    if (this.props.type === "news"){
      this.postToNews();
    } else{
      this.postToMessageBoard();
    }
  }

  postToMessageBoard(){
    let message = {};
    message["body"] = this.state.message;
    if (message['body'].toLowerCase().includes("cookie")){
      Keyboard.dismiss();
      this.props.invalidPost();
      return;
    }
    message["sessionToken"] = this.props.user.sessionToken;
    postMessage(this.props.eventId, message)
    .then(result=>{
      this.setState({message: '', title: ''});
      this.props.callback();
    });
  }

  postToNews(){
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
          {(this.props.type==="news") ?
            (
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
            ) : null
          }
          <TextInput
            style= {this.postBodyStyle()}
            placeholder="Post Message..."
            value= {this.state.message}
            onChangeText={(message)=>this.handleChange(message, "message")}
            onSubmitEditing = {this.post.bind(this)}
            returnKeyType = "send"
            blurOnSubmit = {true}
            multiline = {true}

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
