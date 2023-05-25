import React, { useContext } from 'react';
import { View, Text, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/Global';
import PriorityCard from '../../shared/PriorityCard';
import Header from '../../components/Header';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import TasksContext from '../../shared/TasksContext';

const Home = ({ navigation }) => {

  const { state, dispatch } = useContext(TasksContext);

  const addHighPriorityTask = (task) => {
    dispatch({
      type: 'ADD_TASK',
      priority: 'highPriorityTasks',
      task: task
    });
  };
  const addMediumPriorityTask = (task) => {
    dispatch({
      type: 'ADD_TASK',
      priority: 'mediumPriorityTasks',
      task: task
    });
  };
  const addLowPriorityTask = (task) => {
    dispatch({
      type: 'ADD_TASK',
      priority: 'lowPriorityTasks',
      task: task
    });
  };

  const Details = (priority) => {
    navigation.navigate('Details', {
      tasks: priority === 'high' ? state.highPriorityTasks : priority === 'medium' ? state.mediumPriorityTasks : state.lowPriorityTasks,
      priority,
    });
  };

  const handleCheckboxPress = (taskId, priority) => {
    setTimeout(() => {
      dispatch({
        type: 'REMOVE_TASK',
        priority: priority + 'PriorityTasks',
        taskId
      });
    }, 200);
  };

  const handleUpdateTaskPress = (taskId, updatedTask, priority) => {
    dispatch({
      type: 'UPDATE_TASK',
      priority: priority + 'PriorityTasks',
      taskId,
      updatedTask
    });
  };
  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <Header />
        <PriorityCard
          title="High Priority"
          tasks={state.highPriorityTasks}
          onAddPress={addHighPriorityTask}
          onViewAllPress={() => Details('high')}
          onCheckboxPress={(taskId) => handleCheckboxPress(taskId, 'high')}
          onUpdateTaskPress={(taskId, updatedTask) => handleUpdateTaskPress(taskId, updatedTask, 'high')}
        />
        <PriorityCard
          title="Medium Priority"
          tasks={state.mediumPriorityTasks}
          onAddPress={addMediumPriorityTask}
          onViewAllPress={() => Details('medium')}
          onCheckboxPress={(taskId) => handleCheckboxPress(taskId, 'medium')}
          onUpdateTaskPress={(taskId, updatedTask) => handleUpdateTaskPress(taskId, updatedTask, 'medium')}
        />
        <PriorityCard
          title="Low Priority"
          tasks={state.lowPriorityTasks}
          onAddPress={addLowPriorityTask}
          onViewAllPress={() => Details('low')}
          onCheckboxPress={(taskId) => handleCheckboxPress(taskId, 'low')}
          onUpdateTaskPress={(taskId, updatedTask) => handleUpdateTaskPress(taskId, updatedTask, 'low')}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
