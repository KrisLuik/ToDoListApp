import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import TasksContext from '../shared/TasksContext';

const CustomCategoryCard = ({ navigation, title, color }) => {

    //const { state, dispatch } = useContext(TasksContext);

    return (
      <View style={[styles.card, { backgroundColor: color }]}>
        <Text style={styles.title}>{title}</Text>
        {/* Additional content */}
        
      </View>
    );
  };

  const styles = StyleSheet.create({
    card: {
      padding: 16,
      borderRadius: 8,
      marginVertical: 8,
      // Additional styles
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      // Additional styles
    },
    /*
    titleAndContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 11
    },
    dropdownTextStyle: {
        color: 'black',
        paddingLeft: 40,
        fontSize: 15,
        padding: 7
    },
    */
  });
  export default CustomCategoryCard;