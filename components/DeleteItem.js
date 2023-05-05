/*import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../styles/Global';
import { CheckBox } from 'react-native-elements';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

// Delete Method.
export default function ToDoItem({ item, onCheckboxPress }) {
    const [showTick, setShowTick] = useState(false);

    const handleCheckboxPress = () => {
        onCheckboxPress(item.key);

        if (!item.checked) {
            setShowTick(true);

            setTimeout(() => {
                setShowTick(false);
            }, 5000);
        }
    };


    return (
        <View style={styles.checkboxWrapper}>
            <CheckBox
                title={
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text>{item.text}</Text>
                        {showTick && item.checked && (
                            <Ionicons name="checkmark-outline" size={20} color="green" />
                        )}
                    </View>
                }
               // containerStyle={styles.checkboxContainer}
                textStyle={styles.dropdownTextStyle}
                checked={item.checked}
                onPress={handleCheckboxPress}
            />
            <View style={styles.divider} />
        </View>
    );
}
const styles = StyleSheet.create({

    checkboxContainer: {
        backgroundColor: 'transparent',
        padding: 3,
        marginLeft: 7,
        marginRight: 0,
    },
});
*/