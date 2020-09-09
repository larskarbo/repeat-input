import React, { useState } from 'react';
import {  View,  } from 'react-native';
import Text from './stock/Text';

export default function ({ children }) {

  return (
    <View style={{
      flex: 1,
      height: 100,
      backgroundColor: "white",
      padding:20,
      alignItems: "center",
      justifyContent: "center",
      borderBottomColor: "black",
      borderBottomWidth: 4,
      // borderBottomColor: "black",
    }}>
      {children}
    </View>
  );
}

