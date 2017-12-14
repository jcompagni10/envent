import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import AppHeader from '../header';
import {fetchModuleData} from '../../util/api';
import Loader from '../misc/loader';
import style from '../styles/messages';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      isLoading: true,
    };
  }

  componentWillMount(){
    let eventId = this.props.navigation.state.params.eventId;
    fetchModuleData(eventId, "news")
      .then(data =>{
        this.setState({
          newsItems: data.by_id,
          newsIds: data.all_ids,
          isLoading: false
        });
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
      <View>
        <AppHeader
          title = {"News"}
          navigation = {this.props.navigation}
        />
        <View style={style.listWrapper}>
          <FlatList
            renderItem={({item}) => this._renderListItem(item)}
            data = {this.state.newsIds}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}
