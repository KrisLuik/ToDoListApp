import React from 'React';
import { StyleSheet, View } from 'react-native';
import { globalStyles } from '../styles/Global';

export default function Card(props){
    return (
        <View style={globalStyles.cardContainer}>
            <View style={globalStyles.cardContent}>
                {props.childen}
            </View>
        </View>
    )
}