import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>This section will have card component with chart stats </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 70, 
        paddingTop: 23, 
        backgroundColor: 'lavender'
    },
    title: {
        textAlign: 'center',
        color: 'black',
        fontSize: 14, 
        fontWeight: 'bold',
    }
});