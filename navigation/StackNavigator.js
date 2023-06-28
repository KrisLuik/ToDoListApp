// StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Details from './screens/Details';
import Categories from './screens/Categories';
import Settings from './screens/Settings';
import CustomCategoryCard from '../shared/CustomCategoryCard';

const HomeStack = createStackNavigator();
const CategoriesStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='HomeStack' component={Home} options={{headerShown: false}}/>
      <HomeStack.Screen name='Details' component={Details} />
    </HomeStack.Navigator>
  );
};

const CategoriesStackNavigator = () => {
  return (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen name='CategoriesStack' component={Categories} options={{headerShown: false}}/>
      <CategoriesStack.Screen name='CustomCategoryCard' component={CustomCategoryCard} options={{headerShown: false}}/>
    </CategoriesStack.Navigator>
  );
};

const SettingsStackNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name='SettingsStack' component={Settings} options={{headerShown: false}}/>
    </SettingsStack.Navigator>
  );
};

export { HomeStackNavigator, CategoriesStackNavigator, SettingsStackNavigator };
