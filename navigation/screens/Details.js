import * as React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { globalStyles } from '../../styles/Global';


export default function DetailsScreen({navigation}){
    return (
    
     <View style={globalStyles.screenContainer}>
            <Text style={globalStyles.notificationText}
                onPress={() => navigation.navigate('Home')}>Details Screen
            </Text>
        </View>
    )
}

/*const styles = StyleSheet.create({
    detailsScreenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    notificationText: {
        fontSize: 26,
        fontWeight: 'bold',

    }
})
*/