// ./navigation/StackNavigator.js

import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation/stack';

import HomeScreen from 'navigation/screens/Home';
import DetailsScreen from 'navigation/screens/Details';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      //  screenOptions={{
         //   headerStyle:{
          //      backgroundColor: '#9AC4F8',
         //   },
          //  headerTintColor: 'white',
         //   headerBackTitle: 'Back'

       // }}
        >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Details' component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };