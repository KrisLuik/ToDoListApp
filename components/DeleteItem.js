import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/Global';

// Delete Method.
export default function ToDoItem({item, pressHandler}) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={globalStyles.item}>{item.text} </Text>
        </TouchableOpacity>
    );
}
