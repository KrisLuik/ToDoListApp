import * as React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
//import { globalStyles } from '../../styles/Global';
import CustomCheckbox from '../../shared/Checkbox';
import { useContext } from 'react';
import TasksContext from '../../shared/TasksContext';

const Details = ({ route, navigation }) => {
  const { priority } = route.params;
  const { state, dispatch, handleCheckboxPress } = useContext(TasksContext);

  const tasks = state[`${priority}PriorityTasks`]; // Fetch tasks based on priority

  const handlePress = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isChecked: !task.isChecked
        };
      } else {
        return task;
      }
    });
    dispatch({
      type: 'UPDATE_TASK',
      priority: `${priority}PriorityTasks`,
      tasks: updatedTasks
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <CustomCheckbox
        task={item.task}
        taskId={item.id}
        priority={priority}
        isChecked={item.isChecked}
        onCheckboxPress={() => handleCheckboxPress(priority, item.id)}
        onPress={handlePress}
      />
      <View style={styles.divider} />
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{priority} Priority</Text>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    marginBottom: 10,
  },
  itemText: {
    fontSize: 18,
  },
  // divider is also used in PriorityCard.js so make this into a global style later on.
  divider: {
    height: 1,
    backgroundColor: 'grey',
    marginLeft: 10,
    marginRight: 10,
  },
});
