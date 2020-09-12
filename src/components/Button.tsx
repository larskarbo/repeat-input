import React, { useState } from 'react';
import { View, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Text from './Text';

export default function ({ text, ...props }) {

  return (
    <TouchableOpacity
    {...props}
    style={{
      // flex: 1,
      // borderBottomColor: "black",
      borderColor: "black",
      borderWidth: 1,
      marginHorizontal: 5,
      padding: 10
    }}>
      <Text style={{
        // fontWeight: "700",
        fontSize: 20
      }}>{text}</Text>
    </TouchableOpacity>
  );
}

