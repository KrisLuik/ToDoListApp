import * as React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { globalStyles } from '../../styles/Global';


const Details= () =>{
    return (
     <View style={globalStyles.screenContainer}>
            <Text style={globalStyles.notificationText}>
                This is the details screen.
            </Text>
        </View>
    );
};

export default Details;