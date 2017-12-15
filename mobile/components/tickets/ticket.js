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

export default (props)=>{
    return (
      <View>
        <Header
          title = {"Ticket"}
          navigation = {props.navigation}
        />
      <View style = {style.ticketWrapper}>
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
