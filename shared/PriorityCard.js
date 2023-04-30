import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, StyleSheet, Button, LayoutAnimation } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import { globalStyles } from '../styles/Global';
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';

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

    const displayedTasks = expanded ? tasks : tasks.slice(0, 3);

    const priorityColor = (title) => {
        switch (title) {
            case 'High Priority':
                return { backgroundColor: 'rgba(254, 40, 62, 0.5)' }; // Red
            case 'Medium Priority':
                return { backgroundColor: 'rgba(255, 233, 32, 0.5)' }; // Yellow
            case 'Low Priority':
                return { backgroundColor: 'rgba(4, 222, 113, 0.5)' }; // Green
            default:
                return {};
        }
    };

    const priorityContainerColor = (title) => {
        switch (title) {
            case 'High Priority':
                return { backgroundColor: 'rgba(254, 40, 62, 0.2)' }; // Pastel Red
            case 'Medium Priority':
                return { backgroundColor: 'rgba(255, 233, 32, 0.2)' }; // Pastel Yellow
            case 'Low Priority':
                return { backgroundColor: 'rgba(4, 222, 113, 0.2)' }; // Pastel Green
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
                <View style={styles.dropdownTextStyle}>
                    {displayedTasks.map((task, index) => (
                        <View key={index}>
                            <CheckBox
                                title={task}
                                containerStyle={styles.checkboxContainer}
                                textStyle={styles.dropdownTextStyle}
                                checked={task.checked}
                                onPress={() => onCheckboxPress(task)}
                            />
                            <View style={styles.divider} />
                        </View>
                    ))}
                </View>
                <TouchableOpacity
                    onPress={onViewAllPress}>
                    <View style={styles.arrowIconStyle}>
                        <Icon name="chevron-forward" size={24} color='grey'/>
                    </View>
                </TouchableOpacity>
            </View>

            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter task"
                                value={inputValue}
                                onChangeText={setInputValue}
                            />
                            <View style={styles.modalButtonStyle}>
                                <Button title="Add" onPress={handleSubmit} />
                            </View>
                            <View style={styles.modalButtonStyle}>
                                <Button title="Cancel" onPress={closeModal} />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            
        </View>
    );
};

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
    input: {
        height: 40,
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 1,
        //width: '80%',
        width: 300,
        marginBottom: 10,
    },
    cardTitleContainer: {
        paddingLeft: 20,
        paddingTop: 40,
    },
    button: {
        borderRadius: 8,
        alignItems: 'stretch',
        justifyContent: 'left',
        elevation: 20,
        height: 38,
    },
    buttonTextStyle: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        paddingBottom: 4
    },

    dropdownContainer: {
        backgroundColor: 'blue',
        borderRadius: 3,

    },
    priorityContainer: {
        backgroundColor: 'white',
        margin: 15,
        borderRadius: 8,
        //shadowOffset: 15,
        //shadowRadius: 3,
        //shadowOpacity: 0.3,
        //shadowColor: 'grey',
    },
    modalButtonStyle: {
        margin: 3,
        height: 50,
        width: 303,
        borderWidth: 5,
        borderRadius: 10,
        borderColor: '#8c51ff',
        backgroundColor: '#8c51ff',
        // add colour 
    },
    arrowIconStyle: {
        alignItems: 'flex-end',
        paddingTop: 4,
        paddingRight: 6,
        paddingBottom: 6
    },
    checkboxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        padding: 3,
        marginLeft: 7,
        marginRight: 0,
    },
    divider: {
        height: 1,
        backgroundColor: 'grey',
        marginLeft: 10,
        marginRight: 10,
    },
    titlePlusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingLeft: 11
    },
    plusIconStyle: {
        alignItems: 'flex-end',
        paddingTop: 4,
        paddingRight: 5,
        paddingBottom: 4,
    }
});

export default PriorityCard;
