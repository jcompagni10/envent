import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  SectionList,
  ListItem,
  Header,
  List,
  VirtualizedList,
  FlatList,
} from 'react-native';
import {fetchModuleData} from '../../util/api';
import Loader from '../misc/loader';
import style from '../styles/event_boxes';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      isLoading: true,
    };
  }

  componentWillMount(){
    fetchModuleData(this.props.eventId, "schedule_items")
      .then(data => (
        this.setState({
          items: Object.values(data.by_id),
          isLoading: false
        })
      ));
  }

  sentenceCase(str){
    return str.split(' ').map(word=>{
      if (word === "") return;
      word = word[0].toUpperCase() + word.slice(1);
      return word;
    })
    .join(' ');
  }
  _renderSquare(item){
    return (
      <View style={style.square} key = {item.id}>
        <Image style={style.squareImage} source = {{uri: item.img_url}}  />
        <Text
          style={style.squareTitle}>
          {this.sentenceCase(item.title)}
        </Text>
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
      <View style={style.squaresContainer}>
        {this.state.items.map(item=>(
          this._renderSquare(item)
        ))}
      </View>
    );
  }
}
