import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/Global';
import { Ionicons } from '@expo/vector-icons';

export default function Categories({ navigation }) {
    return (
        <View style={globalStyles.screenContainer}>
            <ScrollView contentContainerStyle={styles.container}>
                <TouchableOpacity
                    style={[styles.card, { backgroundColor: 'rgba(249, 23, 43, 1)' }]}
                    onPress={() => navigation.navigate('Details', { priority: 'High' })}
                >
                    <Text style={styles.title}>High Priority</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.card, { backgroundColor: 'rgba(250,185,0, 1)' }]}
                    onPress={() => navigation.navigate('Details', { priority: 'Medium' })}
                >
                    <Text style={styles.title}>Medium Priority</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.card, { backgroundColor: 'rgba(82,196,26,1)' }]}
                    onPress={() => navigation.navigate('Details', { priority: 'Low' })}
                >
                    <Text style={styles.title}>Low Priority</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.card, { backgroundColor: '#cccccc' }]}
                    onPress={() => navigation.navigate('CustomCategoryCard')}
                >
                    <View style={styles.iconContainer}>
                        <Ionicons name="add-circle" size={48} color='#5C5D67' style={styles.iconStyle}/>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        paddingTop: 45,
        padding: 16,
    },
    card: {
        width: '45%',
        height: '80%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      iconStyle: {
        alignSelf: 'center',
      },
});
