import React, { useState } from 'react';
import { View, Platform } from 'react-native';
import Text from './Text';

export default function ({ children }) {
  console.log(Platform.OS)
  if (Platform.OS != "web" || window.innerWidth < 450) {
    return (
      <View>{children}</View>
    )
  }

  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      backgroundColor: "#103537",
      paddingVertical: 50,
    }}>

      <View style={{
        width: 450,
        backgroundColor: "white",
        minHeight: 800,
        flex: 1
      }}>
        <View style={{

          flex: 1
        }}>
          {children}
        </View>
      </View>

    </View>
  );

}

