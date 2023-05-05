/*import React, { useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { globalStyles } from '../styles/Global';

export default function AddToDo({submitHandler}){
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }
    
    return (
        <View style={globalStyles.addItemContainer}>
            <View>
                <TextInput
                style={styles.input}
                placeholder='New Task'
                onChangeText={changeHandler}
                /> 
            </View>
            <View style={globalStyles.buttonStyle}>
            <Button onPress={() => submitHandler(text)} title='Add Item' color='black' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        color: 'black'
    }
})
*/