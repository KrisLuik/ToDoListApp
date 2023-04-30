import { HomeStackNavigator, CategoriesStackNavigator, SettingsStackNavigator } from './StackNavigator';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons';

// Screens
//import Home from './screens/Home';
//import DetailsScreen from '/screens/Details';
import Settings from './screens/Settings';
import Categories from './screens/Categories';

const home = 'Home';
const categories = 'Categories';
const settings = 'Settings';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={'Home'}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let routeName = route.name;

                        if (routeName == 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (routeName == 'Categories') {
                            iconName = focused ? 'list' : 'list-outline';
                        } else if (routeName == 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }
                        return <IonIcons name={iconName} size={size} color={color} />
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70 }
                }}
            // Need to leave tab.screen as Home to be able to see icons.
            >
                <Tab.Screen name='Home' component={HomeStackNavigator} />
                <Tab.Screen name='Categories' component={CategoriesStackNavigator} />
                <Tab.Screen name='Settings' component={SettingsStackNavigator} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default BottomTabNavigator;


