import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/Global';
import PriorityCard from '../../shared/PriorityCard';
import Header from '../../components/Header';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const Home = ({ navigation }) => {

  const [highPriorityTasks, setHighPriorityTasks] = useState([]);
  const [mediumPriorityTasks, setMediumPriorityTasks] = useState([]);
  const [lowPriorityTasks, setLowPriorityTasks] = useState([]);
  
  const addHighPriorityTask = (task) => {
    setHighPriorityTasks([...highPriorityTasks, { id: uuidv4(), task }]);
  
  };

  const addMediumPriorityTask = (task) => {
    setMediumPriorityTasks([...mediumPriorityTasks, { id: uuidv4(), task }]);
  };

  const addLowPriorityTask = (task) => {
    setLowPriorityTasks([...lowPriorityTasks, { id: uuidv4(), task }]);
  };

  const Details = (priority) => {
    navigation.navigate('Details', {
      tasks: priority === 'High' ? highPriorityTasks : priority === 'Medium' ? mediumPriorityTasks : lowPriorityTasks,
      priority,
    });
  };

  const handleCheckboxPress = (taskId, priority) => {
    setTimeout(() => {
      if (priority === 'High') {
        const newTasks = highPriorityTasks.filter((task) => task.id !== taskId);
        setHighPriorityTasks(newTasks);
      } else if (priority === 'Medium') {
        const newTasks = mediumPriorityTasks.filter((task) => task.id !== taskId);
        setMediumPriorityTasks(newTasks);
      } else if (priority === 'Low') {
        const newTasks = lowPriorityTasks.filter((task) => task.id !== taskId);
        setLowPriorityTasks(newTasks);
      }
    }, 200)

  };

  /*
    In this updated function, the map function checks 
    each task's id property against the provided taskId 
    instead of its index. If the ids match, it replaces
    the task with the updatedTask
  */
  const handleUpdateTaskPress = (taskId, updatedTask, priority) => {
    if (priority === 'High') {
      const updatedTasks = highPriorityTasks.map((task) =>
        task.id === taskId ? { id: taskId, task: updatedTask } : task
      );
      setHighPriorityTasks(updatedTasks);
    } else if (priority === 'Medium') {
      const updatedTasks = mediumPriorityTasks.map((task) =>
        task.id === taskId ? { id: taskId, task: updatedTask } : task
      );
      setMediumPriorityTasks(updatedTasks);
    } else if (priority === 'Low') {
      const updatedTasks = lowPriorityTasks.map((task) =>
        task.id === taskId ? { id: taskId, task: updatedTask } : task
      );
      setLowPriorityTasks(updatedTasks);
    }
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <Header />
        <PriorityCard
          title="High Priority"
          tasks={highPriorityTasks}
          onAddPress={addHighPriorityTask}
          onViewAllPress={() => Details('High')}
          onCheckboxPress={(taskId) => handleCheckboxPress(taskId, 'High')}
          onUpdateTaskPress={(taskId, updatedTask) => handleUpdateTaskPress(taskId, updatedTask, 'High')}
        />
        <PriorityCard
          title="Medium Priority"
          tasks={mediumPriorityTasks}
          onAddPress={addMediumPriorityTask}
          onViewAllPress={() => Details('Medium')}
          onCheckboxPress={(taskId) => handleCheckboxPress(taskId, 'Medium')}
          onUpdateTaskPress={(taskId, updatedTask) => handleUpdateTaskPress(taskId, updatedTask, 'Medium')}
       />
        <PriorityCard
          title="Low Priority"
          tasks={lowPriorityTasks}
          onAddPress={addLowPriorityTask}
          onViewAllPress={() => Details('Low')}
          onCheckboxPress={(taskId) => handleCheckboxPress(taskId, 'Low')}
          onUpdateTaskPress={(taskId, updatedTask) => handleUpdateTaskPress(taskId, updatedTask, 'Low')}
        />
      </ScrollView>
    </View>
  );
};

export default Home;

