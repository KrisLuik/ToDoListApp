//import React, { useState } from 'react';
import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import CustomCheckbox from './Checkbox';
import TaskModal from './TaskModal';
import TaskEditModal from './TaskEditModal';
import usePriorityStyles from '../components/UsePriorityStyles';
import TasksContext from '../shared/TasksContext';

const PriorityCard = ({
    title,
    tasks,
    onAddPress,
    onViewAllPress,
    onCheckboxPress,
    // handleCheckboxPress,
    onUpdateTaskPress,
    handleUpdateTaskPress//added
}) => {
    const [expanded, setExpanded] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editingTaskKey, setEditingTaskKey] = useState(null);

    const { color, containerColor } = usePriorityStyles(title);

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    };

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleSubmit = () => {
        onAddPress({ id: uuidv4(), task: inputValue, isChecked: false });
        setInputValue('');
        closeModal();
    };
    /*
    const handleCheckboxPress = (taskId, priority) => {
        onCheckboxPress(taskId, priority);
   };
*/
    const handleTaskPress = (taskId) => {
        const taskToEdit = tasks.find(task => task.id === taskId);
        setEditingTaskKey(taskId);
        setInputValue(taskToEdit ? taskToEdit.task : '');
        setEditModalVisible(true);
    };

    const handleTaskUpdate = () => {
        onUpdateTaskPress(editingTaskKey, { task: inputValue, isChecked: false });
        setInputValue('');
        closeEditModal();
    };

    const closeEditModal = () => {
        setEditModalVisible(false);
    };

    const displayedTasks = expanded ? tasks : tasks.slice(0, 3);

    return (
        <View>
            <View style={[styles.priorityContainer, containerColor]}>
                <TouchableOpacity
                    style={[styles.button, color]}
                    onPress={toggleExpand}>
                    <View style={styles.titlePlusContainer}>
                        <Text style={styles.buttonTextStyle}>{title}</Text>
                        <TouchableOpacity
                            style={styles.plusIconStyle}
                            onPress={openModal}>
                            <Ionicons name="add-circle" size={27} color="white" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <View>
                    {displayedTasks.map((task) => (
                        <View key={task.id}>
                            <CustomCheckbox
                                task={task.task}
                                taskId={task.id}
                                priority={title}
                                isChecked={task.isChecked}
                                onCheckboxPress={onCheckboxPress}
                                onPress={handleTaskPress}
                            />
                            <View style={styles.divider} />
                        </View>
                    ))}
                </View>
                <TouchableOpacity
                    onPress={onViewAllPress}>
                    <View style={styles.arrowIconStyle}>
                        <Icon name="chevron-forward" size={24} color='#5C5D67' />
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <TaskModal
                    modalVisible={modalVisible}
                    closeModal={closeModal}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    handleSubmit={handleSubmit}
                />
                <TaskEditModal
                    modalVisible={editModalVisible}
                    closeModal={closeEditModal}
                    inputValue={inputValue}
                    tasks={tasks}
                    editingTaskKey={editingTaskKey}
                    setInputValue={setInputValue}
                    handleUpdateTaskPress={handleTaskUpdate}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    priorityContainer: {
        backgroundColor: 'white',
        margin: 15,
        borderRadius: 8,
    },
    titlePlusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingLeft: 11
    },
    buttonTextStyle: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        paddingBottom: 4
    },
    button: {
        borderRadius: 8,
        alignItems: 'stretch',
        justifyContent: 'left',
        elevation: 20,
        height: 38,
    },
    arrowIconStyle: {
        alignItems: 'flex-end',
        paddingTop: 4,
        paddingRight: 6,
        paddingBottom: 6
    },
    plusIconStyle: {
        alignItems: 'flex-end',
        paddingTop: 4,
        paddingRight: 5,
        paddingBottom: 4,
    },
    divider: {
        height: 1,
        backgroundColor: 'grey',
        marginLeft: 10,
        marginRight: 10,
    },
    dropdownTextStyle: {
        color: 'black',
        paddingLeft: 40,
        fontSize: 15,
        padding: 7
    },
});

export default PriorityCard;
