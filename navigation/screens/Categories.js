import * as React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/Global';


export default function CategoriesScreen({navigation}){
    return (
     <View style={globalStyles.screenContainer}>
            <Text style={globalStyles.notificationText}
                onPress={() => navigation.navigate('Home')}> Categories Screen
            </Text>
        </View>
    )
}
