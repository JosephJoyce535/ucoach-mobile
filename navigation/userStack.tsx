import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import Survey from '../screens/Survey';
import List from '../screens/List';
import Survey2 from '../screens/Survey2'

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Survey" component={Survey} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Survey2" component={Survey2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}