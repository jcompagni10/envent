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
import AppHeader from '../header';
import {fetchSchedule} from '../../util/api';
import Loader from '../misc/loader';
import style from '../styles/schedule';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      isLoading: true,
    };
  }

  componentWillMount(){
    let eventId = this.props.navigation.state.params.eventId;
    fetchSchedule(eventId)
      .then(this.parseSchedule.bind(this));
  }

  parseSchedule(schedule){
    let timeGrouped = schedule.by_time;
    let days = Object.keys(timeGrouped);
    let itemsByDay = {};
    days.forEach (day=>{
      itemsByDay[day] = [];
      Object.keys(timeGrouped[day]).forEach(timeSlot=>{
        let slot = {};
        slot["title"] = timeSlot;
        slot["data"] = timeGrouped[day][timeSlot];
         itemsByDay[day].push(slot);
      });
    });
    this.setState({
      days,
      itemsByDay,
      items: schedule.by_id,
      isLoading: false,
      curDay: days[0]
    });
  }

  _renderListItem(item){
    let data = this.state.items[item];
    return (
      <View style={style.listItem}>
        <Image
          style = {style.itemImage}
          source={{uri: data.img_url}} />
        <View style={style.itemInfo}>
          <Text style={style.itemTitle}>
            {data.title}
          </Text>
          <Text style={style.itemLocation}>
            {data.location}
          </Text>
        </View>
      </View>
    );
  }

  _renderSectionHeader(title){
    return (
      <View style={style.sectionHeader}>
        <Text style={style.sectionHeaderText}>
          {title}
        </Text>
      </View>
    );
  }
  setDay(day){
    this.setState({curDay: day});
  }
  buttonStyle(day){
    let base = {
      padding: 10,
      borderBottomColor: '#4abdac',
    };
    if (day === this.state.curDay){
      return Object.assign(base, {borderBottomWidth: 2});
    } else {
      return base;
    }
  }

  dayButtons(){
    if (this.state.days.length > 1){
      return (
        <View style={style.buttonContainer} >
          {this.state.days.map((day)=>(
            <TouchableHighlight
              key ={day}
              style={this.buttonStyle(day)}
              onPress={()=>this.setDay(day)}
            >
              <Text style={style.dayButtonText}>{day}</Text>
            </TouchableHighlight>
          ))}
        </View>
      );
    }
    return null;
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
          title = {"Schedule"}
          navigation = {this.props.navigation}
        />
        <View style={style.listWrapper}>
          {this.dayButtons()}
          <SectionList
            renderItem={({item}) => this._renderListItem(item)}
            renderSectionHeader={({section}) => this._renderSectionHeader(section.title)}
            sections = {this.state.itemsByDay[this.state.curDay]}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}
