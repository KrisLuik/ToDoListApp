import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/Global';
import PriorityCard from '../../shared/PriorityCard';
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

  const handleCheckboxPress = (taskKey, priority) => {
    setTimeout(() => {
      if (priority === 'High') {
        const newTasks = highPriorityTasks.filter((_, index) => index !== taskKey);
        setHighPriorityTasks(newTasks);
      } else if (priority === 'Medium') {
        const newTasks = mediumPriorityTasks.filter((_, index) => index !== taskKey);
        setMediumPriorityTasks(newTasks);
      } else if (priority === 'Low') {
        const newTasks = lowPriorityTasks.filter((_, index) => index !== taskKey);
        setLowPriorityTasks(newTasks);
      }
    }, 200)

  };

  const handleUpdateTaskPress = (taskKey, updatedTask, priority) => {
    if (priority === 'High') {
      const updatedTasks = highPriorityTasks.map((task, index) =>
        index === taskKey ? updatedTask : task
      );
      setHighPriorityTasks(updatedTasks);
    } else if (priority === 'Medium') {
      const updatedTasks = mediumPriorityTasks.map((task, index) =>
        index === taskKey ? updatedTask : task
      );
      setMediumPriorityTasks(updatedTasks);
    } else if (priority === 'Low') {
      const updatedTasks = lowPriorityTasks.map((task, index) =>
        index === taskKey ? updatedTask : task
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
          onCheckboxPress={(taskKey) => handleCheckboxPress(taskKey, 'High')}
          onUpdateTaskPress={(taskKey, updatedTask) => handleUpdateTaskPress(taskKey, updatedTask, 'High')}
        />
        <PriorityCard
          title="Medium Priority"
          tasks={mediumPriorityTasks}
          onAddPress={addMediumPriorityTask}
          onViewAllPress={() => Details('Medium')}
          onCheckboxPress={(taskKey) => handleCheckboxPress(taskKey, 'Medium')}
          onUpdateTaskPress={(taskKey, updatedTask) => handleUpdateTaskPress(taskKey, updatedTask, 'Medium')}
       />
        <PriorityCard
          title="Low Priority"
          tasks={lowPriorityTasks}
          onAddPress={addLowPriorityTask}
          onViewAllPress={() => Details('Low')}
          onCheckboxPress={(taskKey) => handleCheckboxPress(taskKey, 'Low')}
          onUpdateTaskPress={(taskKey, updatedTask) => handleUpdateTaskPress(taskKey, updatedTask, 'Low')}
        />
      </ScrollView>
    </View>
  );
};

export default Home;

