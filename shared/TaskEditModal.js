import React from 'react';
import { View, TextInput, Modal, StyleSheet, Button } from 'react-native';
import { useEffect } from 'react';

const TaskEditModal = ({ modalVisible, inputValue, priority, closeModal, tasks, editingTaskKey, setInputValue, handleUpdateTaskPress, handleSubmit }) => {
    useEffect(() => {
        if (editingTaskKey != null) {
            const taskToEdit = tasks.find(task => task.id === editingTaskKey);
            if (taskToEdit) {
                setInputValue(taskToEdit.task);
            }
        }
    }, [editingTaskKey, tasks]);

    const handleEditSubmit = () => {
        if (editingTaskKey !== null) {
            handleUpdateTaskPress(editingTaskKey, inputValue, priority);
        } else {
            handleSubmit(priority, inputValue);
        }
        setInputValue('');
        closeModal();
    };
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
                        <Button
                            title={editingTaskKey !== null ? 'Update' : 'Add'}
                            onPress={handleEditSubmit}
                            color="white"
                        />
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

