import * as React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/Global';

export default function SettingsScreen({navigation}){
    return (
        <View style={globalStyles.screenContainer}>
            <Text style={globalStyles.notificationText}
                 onPress={() => navigation.navigate('Home')}>Settings Screen
            </Text>
        </View>
    )
}
