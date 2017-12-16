import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import QRCode from 'react-native-qrcode';
import Header from '../header';
import style from '../styles/ticket';
import LinearGradient from 'react-native-linear-gradient';

export default (props)=>{
    return (
      <View>
        <Header
          title = {"Ticket"}
          navigation = {props.navigation}
        />
      <View
          start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
          locations={[0,0.5,0.6]}
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style = {style.ticketWrapper}>
          <QRCode
            value="hello world"
            size={200}
            bgColor="black"
            fgColor="#fff"
          />
      </View>
      </View>

    );
  };
