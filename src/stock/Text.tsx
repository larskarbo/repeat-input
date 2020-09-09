import React from 'react';
import {  Text,  } from 'react-native';

export default function ({ children, ...props }) {

  return (
    <Text
    {...props}
    style={{
      fontSize: 25,
      ...props.style
    }}>
      {children}
    </Text>
  );
}

