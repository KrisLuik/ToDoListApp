import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/Home';
//import DetailsScreen from '/screens/Details';
import SettingsScreen from './screens/Settings';
import CategoriesScreen from './screens/Categories';


// Screens declared below so I can see icons in bottom Nav.
const homeScreen = 'Home';
const categoriesScreen = 'Categories';
const settingsScreen = 'Settings';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
     <NavigationContainer>
        <Tab.Navigator
            initialRouteName={'Home'}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let routeName = route.name;

                    if (routeName == 'Home'){
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (routeName == 'Categories'){
                        iconName = focused ? 'list' : 'list-outline';
                    } else if (routeName == 'Settings'){
                        iconName = focused ? 'settings' : 'settings-outline';
                    }
                    return <IonIcons name={iconName} size={size} color={color} />
                },
            })}
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'grey',
                labelStyle: {paddingBottom: 10, fontSize: 10 },
                style: {padding: 10, heights: 70}
            }}
            
            >
                <Tab.Screen name={'Home'} component={HomeScreen} />
                <Tab.Screen name={'Categories'} component={CategoriesScreen} />
                <Tab.Screen name={'Settings'} component={SettingsScreen} />
        </Tab.Navigator>
     </NavigationContainer>
    )
}