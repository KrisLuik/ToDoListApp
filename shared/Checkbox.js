import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const CustomCheckbox = ({ task, taskKey, priority, isChecked, onCheckboxPress, onPress }) => {
    const [checked, setChecked] = useState(isChecked);

    const toggleCheckBox = () => {
        setChecked(!checked);
        onCheckboxPress(taskKey, priority);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleCheckBox} style={styles.checkboxContainer}>
                {checked ? (
                    <Ionicons name="checkbox" size={24} color="green" />
                ) : (
                    <Ionicons name="square-outline" size={24} color="black" />
                )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress(taskKey)} style={styles.textContainer}>
                <Text style={styles.taskText}>{task}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      checkboxContainer: {
        margin: 2,
        padding: 4,
        paddingLeft: 7
      },
      textContainer: {
        flex: 1,
      },
      taskText: {
        fontSize: 16,
        color: 'black'
      },
    });

export default CustomCheckbox;

