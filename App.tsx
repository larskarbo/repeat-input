import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AllBuckets from "./src/AllBuckets"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InputView from './src/InputView';
import Text from './src/stock/Text';
import Admin from './src/admin/Admin';

const linking = {
  prefixes: ['http://localhost:19006', 'mychat://'],
  config: {
    screens: {
      Home: 'buckets',
      Bucket: 'buckets/:bucket',
      Admin: 'admin',
      404: '*',
    },
  },
};

const Stack = createStackNavigator();
export default function App() {

  return (
    <View style={styles.container}>

      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={AllBuckets} />
          <Stack.Screen name="Bucket" component={InputView} />
          <Stack.Screen name="404" component={NotFound} />
          <Stack.Screen options={{headerShown:false}} name="Admin" component={Admin} />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}

const NotFound = () => <Text>404 not found</Text>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edece1',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
