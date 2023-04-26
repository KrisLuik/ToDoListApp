import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, FlatList, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/Global';

//import AddToDo from '../../components/AddItem';
//import DeleteItem from '../../components/DeleteItem';
import Header from '../../components/Header';

const Home = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Header />
      <Text>This is the home screen</Text>
      <Button
        title='go to details screen'
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default Home;
