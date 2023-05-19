import React from 'react';
import { View, TextInput, Modal, StyleSheet, Button } from 'react-native';
import { useEffect } from 'react';

const TaskEditModal = ({ modalVisible, inputValue, closeModal, tasks, editingTaskKey, setInputValue, handleUpdateTaskSubmit }) => {
  useEffect(() => {
    if(editingTaskKey != null) {
      const taskToEdit = tasks.find(task => task.id === editingTaskKey);
      if(taskToEdit) {
        setInputValue(taskToEdit.task);
      }
    }
  }, [editingTaskKey, tasks]);

  const handleEditSubmit = () => {
    handleUpdateTaskSubmit(editingTaskKey, inputValue);
    setInputValue('');
    closeModal();
};
/*
const TaskEditModal = ({ modalVisible, closeModal, inputValue, setInputValue, taskId, handleUpdateTaskSubmit }) => {

    const handleEditSubmit = () => {
        handleUpdateTaskSubmit(taskId, inputValue);
        setInputValue('');
        closeModal();
    };
*/
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TextInput
                        style={styles.inputContainer}
                        placeholder="Enter task"
                        placeholderTextColor='rgba(128, 128, 128, 0.3)'
                        value={inputValue}
                        onChangeText={setInputValue}
                    />
                    <View style={styles.modalButtonStyle}>
                        <Button title="Update" onPress={handleEditSubmit} color='white' />
                    </View>
                    <View style={styles.modalButtonStyle}>
                        <Button title="Cancel" onPress={closeModal} color='white' />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default TaskEditModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        height: 40,
        width: 300,
        marginBottom: 10,
        paddingLeft: 7,
        borderWidth: 1,
        borderRadius: 10,
        color: 'black',

    },
    modalButtonStyle: {
        paddingTop: 6,
        margin: 3,
        height: 50,
        width: 303,
        borderRadius: 15,
        backgroundColor: '#6f96e9',
    },
});

