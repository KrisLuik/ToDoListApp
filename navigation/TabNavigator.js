import { HomeStackNavigator, CategoriesStackNavigator, SettingsStackNavigator } from './StackNavigator';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

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
                    tabBarStyle: { backgroundColor: 'rgba(211, 211, 211, 0.3)', height: 92, paddingTop: 12},
                    tabBarActiveTintColor: '#464655',
                    tabBarInactiveTintColor: 'grey',//'rgba(181, 178, 194, 0.9)',
                    tabBarLabelStyle: { paddingBottom: 7, fontSize: 12 }
                })}
            >
                <Tab.Screen name='Home' component={HomeStackNavigator} />
                <Tab.Screen name='Categories' component={CategoriesStackNavigator} />
                <Tab.Screen name='Settings' component={SettingsStackNavigator} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default BottomTabNavigator;
