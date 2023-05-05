import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const CustomCheckbox = ({ task, taskKey, priority, isChecked, onCheckboxPress }) => {
    const [checked, setChecked] = useState(isChecked);
    
    const toggleCheckBox = () => {
        setChecked(!checked);
        onCheckboxPress(taskKey, priority);
    };

    return (
        <View>
             <CheckBox
                 title={task}
                 checked={checked}
                 onPress={toggleCheckBox}
                 checkedIcon={<Ionicons name="checkbox" size={24} color="green" />}
                 uncheckedIcon={<Ionicons name="square-outline" size={24} color="black" />}
             />
         </View>
    );
};

export default CustomCheckbox;
