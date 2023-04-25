//import * as React from 'react';
import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';
import { globalStyles } from '../../styles/Global';
import AddToDo from '../../components/AddItem';
import DeleteItem from '../../components/DeleteItem';
import Header from '../../components/Header';
//import Card from '../../shared/Card';
//import Card from '../shared/Card';

export default function HomeScreen({navigation}){
    // Added
    const [toDos, setToDos] = useState([
        { text: 'buy coffee', key: '1'},
        { text: 'buy milk', key: '2'},
        { text: 'buy cereal', key: '3'},
        { text: 'buy cookies', key: '4'},
        { text: 'buy chips', key: '5'}
       ]);
     
     const pressHandler = (key) => {
       setToDos((prevToDos) => {
         return prevToDos.filter(todo => todo.key != key);
       });
     }
     // not the best option to generate a random number. You can use a library as well.
     const submitHandler = (text) => {
       if(text.length > 3) {
         setToDos((prevToDos) => {
           return [
             {text: text, key: Math.random().toString() },
             ...prevToDos
           ];
         })
       } else {
         Alert.alert('OOPS!', 'To dos must be over 3 chars long', [
           {text: 'Understood', onPress: () => console.log('alert closed')}
         ]);
       }
     
     }
     
    //Added ends
    return (
   // <TouchableWithoutFeedback {() => {
    //    console.log('dismissed keyboard')
   // }}>
 //  <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', item)}> 
      //  <Card>
      //      <Text style={globalStyles.titleText}>{item.title}</Text>
      //  </Card>
        <View style={globalStyles.container}>
            <Header />
            <Text style={globalStyles.notificationText}
                onPress={() => navigation.navigate('Home')}>Tasks
            </Text>
            <View style={globalStyles.content}>
                {/* Body */}
                <AddToDo submitHandler={submitHandler}/>
                    <FlatList
                        data={toDos}
                        renderItem={({item}) => (
                         <DeleteItem item={item} pressHandler={pressHandler} />   
                        )}
                    />
            </View>
        </View>
      //  </TouchableOpacity>
       // </TouchableWithoutFeedback>
    );
}

