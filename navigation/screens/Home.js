import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, FlatList, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/Global';
import PriorityCard from '../../shared/PriorityCard';
//import AddToDo from '../../components/AddItem';
//import DeleteItem from '../../components/DeleteItem';
import Header from '../../components/Header';

const Home = ({ navigation }) => {
    const [highPriorityTasks, setHighPriorityTasks] = useState([]);
    const [mediumPriorityTasks, setMediumPriorityTasks] = useState([]);
    const [lowPriorityTasks, setLowPriorityTasks] = useState([]);
  
    const addHighPriorityTask = (task) => {
      setHighPriorityTasks([...highPriorityTasks, task]);
    };
  
    const addMediumPriorityTask = (task) => {
      setMediumPriorityTasks([...mediumPriorityTasks, task]);
    };
  
    const addLowPriorityTask = (task) => {
      setLowPriorityTasks([...lowPriorityTasks, task]);
    };
  
    const Details = (priority) => {
      navigation.navigate('Details', {
        tasks: priority === 'High' ? highPriorityTasks : priority === 'Medium' ? mediumPriorityTasks : lowPriorityTasks,
        priority,
      });
    };
  
  return (
    <View style={globalStyles.container}>
      <Header />
      <Text>This is the home screen</Text>
      <PriorityCard
        title="High Priority"
        tasks={highPriorityTasks}
        onAddPress={addHighPriorityTask}
        onViewAllPress={() => Details('High')}
      />
      <PriorityCard
        title="Medium Priority"
        tasks={mediumPriorityTasks}
        onAddPress={addMediumPriorityTask}
        onViewAllPress={() => Details('Medium')}
      />
      <PriorityCard
        title="Low Priority"
        tasks={lowPriorityTasks}
        onAddPress={addLowPriorityTask}
        onViewAllPress={() => Details('Low')}
      />
      <Button
        title='go to details screen'
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default Home;
