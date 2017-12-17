import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ListView,
  ActivityIndicator,
  TouchableHighlight,
  Alert
} from 'react-native';
import style from './styles/event_landing_page.js';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import Moment from 'moment';
import Header from './header';
import EventBoxes from './misc/event_boxes.js';

export default class EventLandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolledUp: false
    };
  }


  scrollDown(){
    this.setState({
      scrolledUp: false
    });
  }

  scrollUp(){
    this.setState({
      scrolledUp: true
    });
  }

  formatDate(event){
    const start = new Moment(event.start_date);
    const end = new Moment(event.end_date);
    return start.format("MMMM Do") +  " ~ " + end.format("MMMM Do");
  }


  render() {
    const event = this.props.navigation.state.params.event;
    return (
      <View style={style.landingPageContainer}>
        <Header
          navigation = {this.props.navigation}
          landingPage = {true}
          scrolledUp = {this.state.scrolledUp}
          title = {this.state.scrolledUp ?  event.name : ""}
        />
        <HeaderImageScrollView
          maxHeight = {400}
          minHeight = {70}
          maxOverlayOpacity= {1}
          overlayColor = "#fff"
          renderHeader= {()=> (
              <Image source={{uri: event.img_url}} style={{height: 400, width: '100%'}} />
          )}
          fadeOutForeground = {true}
          foregroundParallaxRatio = {.3}
          renderForeground = {()=>(
            <View style={style.scrollHeaderContainer}>
              <Text style={style.eventTitle}>{event.name}</Text>
              <Text style = {style.eventDateText}>
                {this.formatDate(event)}
              </Text>
              <Text style={style.eventMessage}>{event.message}</Text>
              <Text style = {style.eventLocationText}>
                {event.location}
              </Text>
            </View>
          )}
        >
          <View style={{bottom: 0}}>
            <TriggeringView
              onBeginHidden={() => this.scrollUp()}
              onBeginDisplayed={()=>this.scrollDown()}
              onDisplay = {this.scrollDown.bind(this)}
               >
              <EventBoxes eventId = {event.id}/>
            </TriggeringView>
          </View>
        </HeaderImageScrollView>
      </View>
    );
  }
}
