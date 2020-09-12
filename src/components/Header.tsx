import React, { useState } from 'react';
import { View, } from 'react-native';
import Text from './Text';

export default function ({ text, subtitle, ...props }) {

  return (
    <View style={{
      // flex: 1,
      height: 100,
      backgroundColor: "white",
      padding: 20,
      paddingBottom: 0,
      // alignItems: "center",
      justifyContent: "center",
      borderBottomColor: "black",
      borderBottomWidth: 1,
      flexDirection: "row"
      // borderBottomColor: "black",
    }}>
      <View style={{
        justifyContent: "center",
      }}>
        <Text style={{
          fontWeight: "700",
          fontSize: 30
        }}>{text}</Text>
        {subtitle &&
          <Text style={{
            fontWeight: "300",
            fontSize: 10,
            marginBottom: -10
          }}>{subtitle}</Text>
        }

      </View>
      <View style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row"
      }}>
        {props.children}
      </View>
    </View>
  );
}

