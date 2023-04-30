// StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Details from './screens/Details'; // Updated import path
import Categories from './screens/Categories';
import Settings from './screens/Settings';

const HomeStack = createStackNavigator();
const CategoriesStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={Home} options={{headerShown: false}}/>
      <HomeStack.Screen name='Details' component={Details} />
    </HomeStack.Navigator>
  );
};
const CategoriesStackNavigator = () => {
  return (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen name='Categories' component={Categories} options={{headerShown: false}}/>
    </CategoriesStack.Navigator>
  );
};
const SettingsStackNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name='Settings' component={Settings} options={{headerShown: false}}/>
    </SettingsStack.Navigator>
  );
};

export { HomeStackNavigator, CategoriesStackNavigator, SettingsStackNavigator };
