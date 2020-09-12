import React from 'react';
import {  Text,  } from 'react-native';

export default function ({ children, ...props }) {

  return (
    <Text
    {...props}
    style={{
      fontSize: 25,
      // fontFamily: `Consolas, ‘Andale Mono WT’, ‘Andale Mono’, ‘Lucida Console’, ‘Lucida Sans Typewriter’, ‘DejaVu Sans Mono’, ‘Bitstream Vera Sans Mono’, ‘Liberation Mono’, ‘Nimbus Mono L’, Monaco, ‘Courier New’, Courier, monospace`,
      ...props.style
    }}>
      {children}
    </Text>
  );
}

