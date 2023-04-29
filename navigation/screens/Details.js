import * as React from 'react';
import { View, Text, FlatList, StyleSheet} from 'react-native';
//import { globalStyles } from '../../styles/Global';


const Details= ({route, navigation}) =>{
    const {tasks, priority} = route.params;
    const renderItem = ({item, index}) => (
        <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    );
    return (
        <View style={styles.container}>
        <Text style={styles.title}>{priority} Tasks</Text>
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
  });