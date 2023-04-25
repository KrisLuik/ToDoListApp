import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>To Do Mobile App </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 70, 
        paddingTop: 23, 
        backgroundColor: 'skyblue'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20, 
        fontWeight: 'bold',
    }
});