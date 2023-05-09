
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import CustomCheckbox from './Checkbox';
import TaskModal from './TaskModal';
import TaskEditModal from './TaskEditModal';
import usePriorityStyles from '../components/UsePriorityStyles';

const PriorityCard = ({ title, tasks, onAddPress, onViewAllPress, onCheckboxPress, onUpdateTaskPress }) => {
    const [expanded, setExpanded] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editingTaskKey, setEditingTaskKey] = useState(null);

    const {color, containerColor } = usePriorityStyles(title);

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
        onAddPress(inputValue);
        setInputValue('');
        closeModal();
    };
    const handleCheckboxPress = (taskKey, priority) => {
        onCheckboxPress(taskKey, priority);
    };

    const handleTaskPress = (taskKey) => {
        setEditingTaskKey(taskKey);
        setInputValue(tasks[taskKey]);
        setEditModalVisible(true);
    };

    const handleTaskUpdate = (taskKey, updatedTask) => {
        onUpdateTaskPress(taskKey, updatedTask);
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
                    {displayedTasks.map((task, index) => (
                        <View key={index}>
                            <CustomCheckbox
                                task={task}
                                taskKey={index}
                                priority={title}
                                isChecked={task.isChecked}
                                onCheckboxPress={handleCheckboxPress}
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
                    setInputValue={setInputValue}
                    taskKey={editingTaskKey}
                    handleUpdateTaskSubmit={handleTaskUpdate}
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
