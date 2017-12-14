import React from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';

export default ()=>(
  // TODO2: make this sexier

  <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
    <ActivityIndicator
      size='large'
      color="#4abdac"/>
  </View>
);
