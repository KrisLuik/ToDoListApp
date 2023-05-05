import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import CustomCheckbox from './Checkbox';
import TaskModal from './TaskModal';

const PriorityCard = ({ title, tasks, onAddPress, onViewAllPress, onCheckboxPress }) => {
    const [expanded, setExpanded] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

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
    const handleCheckboxPress = (taskKey,priority) => {
        onCheckboxPress(taskKey, priority);
    };

    const displayedTasks = expanded ? tasks : tasks.slice(0, 3);

    const priorityColor = (title) => {
        switch (title) {
            case 'High Priority':
                return { backgroundColor: 'rgba(249, 23, 43, 1) ' }; // Red 
            case 'Medium Priority':
                return { backgroundColor: 'rgba(250,185,0, 1)' }; // Yellow  
            case 'Low Priority':
                return { backgroundColor: 'rgba(82,196,26,1)' }; // Green 
            default:
                return {};
        }
    };

    const priorityContainerColor = (title) => {
        switch (title) {
            case 'High Priority':
                return { backgroundColor: 'rgba(255,24,12, 0.1)' }; // Pastel Red
            case 'Medium Priority':
                return { backgroundColor: 'rgba(250,172,20, 0.1)' }; // Pastel Yellow 
            case 'Low Priority':
                return { backgroundColor: 'rgba(82,196,26, 0.1)' }; // Pastel Green
            default:
                return {};
        }
    };

    return (
        <View>
            <View style={[styles.priorityContainer, priorityContainerColor(title)]}>
                <TouchableOpacity
                    style={[styles.button, priorityColor(title)]}
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
