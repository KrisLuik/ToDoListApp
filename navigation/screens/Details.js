import * as React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
//import { globalStyles } from '../../styles/Global';
import CustomCheckbox from '../../shared/Checkbox';
import { useState, useContext } from 'react';
import TasksContext from '../../shared/TasksContext';
import TaskEditModal from '../../shared/TaskEditModal';
import { Ionicons } from '@expo/vector-icons';

const Details = ({ route, navigation }) => {
  const { priority } = route.params;
  const { state, handleCheckboxPress, handleUpdateTaskPress, handleSubmit } = useContext(TasksContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [editingTaskKey, setEditingTaskKey] = useState(null);

  const tasks = state[priority + 'PriorityTasks']

  const closeModal = () => {
    setInputValue('');
    setEditingTaskKey(null);
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <CustomCheckbox
        task={item.task}
        taskId={item.id}
        priority={priority}
        isChecked={item.isChecked}
        onCheckboxPress={() => handleCheckboxPress(priority, item.id)}
        onPress={() => {
          setInputValue(item.task);
          setEditingTaskKey(item.id);
          setModalVisible(true);
        }}
      />
      <View style={styles.divider} />
      <TaskEditModal
        modalVisible={modalVisible}
        tasks={tasks}
        editingTaskKey={editingTaskKey}
        inputValue={inputValue}
        setInputValue={setInputValue}
        priority={priority}
        handleUpdateTaskPress={handleUpdateTaskPress}
        handleSubmit={handleSubmit}
        closeModal={closeModal}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{priority} priority</Text>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <View>
        <TouchableOpacity
          style={styles.plusIconStyle}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Ionicons name="add-circle" size={55} color="#6f96e9" />
        </TouchableOpacity>
      </View>
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
  plusIconStyle: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: 155,
    paddingRight: 5,

  }
});