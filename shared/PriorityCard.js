import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Modal, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import { globalStyles } from '../styles/Global';
import { Ionicons } from '@expo/vector-icons';

const PriorityCard = ({title, tasks, onAddPress, onViewAllPress}) => {
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

  return (
    <View>
        <View style={styles.priorityContainer}>
      <TouchableOpacity 
      style={styles.button}
      onPress={toggleExpand}>
        <Text style={styles.buttonTextStyle}>{title}</Text>
      </TouchableOpacity>
  
      {displayedTasks.map((task, index) => (
        <Text style={styles.dropdownTextStyle} key={index}>{task}</Text>
      ))}
 
      <TouchableOpacity 
      style={styles.modalContainer}
      onPress={openModal}
      > 
      <View style={styles.plusIconStyle}>
        <Ionicons name="add-circle" size={27} color="black"/>
      </View>

      </TouchableOpacity>
 
      <TouchableOpacity 
      onPress={onViewAllPress}>
        <View style={styles. arrowIconStyle}>
        <Icon name="chevron-forward" size={24} />
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
    // ModularView
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
    // this is the view when 
    // the user wants to submit or cancel a task
    // needs an icon + button style.
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
    // This is the priority button (needs a dropdown when the user presses on it)
   backgroundColor: '#ff6156', // red #92013b -> also red but different colour
    //backgroundColor: '#c1ff72', // green
   //backgroundColor: '#ffe57c', // yellow
    borderRadius: 5,
    padding: 5,
    margin: 6,
    alignItems: 'left',
    justifyContent: 'left',
    elevation: 20,
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    paddingBottom: 4
  },
  // the green container
  modalContainer: {
    backgroundColor: '#c1ff72', //lightgreen
    padding: 3,
    margin: 6,
    borderRadius: 5,
  },
  dropdownContainer: {
    backgroundColor: 'blue',
    borderRadius: 3,

  },
  priorityContainer:{
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 8,
    shadowOffset: 15, 
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowColor: 'grey',
  },
  modalButtonStyle: {
    margin: 3,
    height:50, 
    width: 303,
    borderWidth: 5,
    borderRadius: 10,
    borderColor: '#8c51ff', 
    backgroundColor: '#8c51ff',
    // add colour 
  },
  plusIconStyle:{
    alignItems: 'flex-end',
    paddingTop: 3,
    paddingBottom: 3
  }
  ,
  arrowIconStyle:{
    alignItems: 'flex-end',
    paddingRight: 11 ,
    paddingBottom: 6
  }

});

export default PriorityCard;
