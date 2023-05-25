//import React from 'react';
import { useReducer } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabNavigator from './navigation/TabNavigator';
import { TasksProvider } from './shared/TasksContext';

export default function App() {
  return (
    <TasksProvider>
        <SafeAreaProvider>
          <StatusBar />
          <BottomTabNavigator />
        </SafeAreaProvider>
    </TasksProvider>
  );
}
