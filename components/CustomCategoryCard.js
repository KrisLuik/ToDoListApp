import React from 'react';
import { Button, View, TextInput, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import TasksContext from '../shared/TasksContext';

const CustomCategoryCard = ({ navigation }) => {

  const { register, handleSubmit, setValue } = useForm();
  const { dispatch } = useContext(TasksContext);

  const PRESET_COLORS = [
    // Going to adjust colour range and put them in order later.
    // Add accessibility features later on as well, i.e., colour blindness colour options. 
    '#A2999E', // Rose Quartz
    '#CBBAED', // Periwinkle (lavender)
    '#F62DAE', // Persian Rose (bright pink)
    '#3ABEFF', // Deep Sky Blue
    '#254441', // Dark Slate Gray - looks dark green tbh
    '#80A4ED', // Vista Blue
    '#824670', // Plum
    '#EFB0A1', // Melon
    '#2B3A67', // Delft Blue
  ];

  useEffect(() => {
    register('title');
    register('color');
  }, [register]);

  const onSubmit = data => {
    dispatch({ type: 'ADD_CATEGORY', category: data });
    navigation.goBack();
  };

  const renderItem = ({ item: color }) => (
    <TouchableOpacity
      style={[styles.colorButton, { backgroundColor: color }]}
      onPress={() => setValue('color', color)}
    />
  );
  const renderRow = (colors) => (
    <View style={styles.colorRow}>
      {colors.map(color => (
        <TouchableOpacity
          key={color}
          style={[styles.colorButton, { backgroundColor: color }]}
          onPress={() => setValue('color', color)}
        />
      ))}
    </View>
  );


  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        onChangeText={text => setValue('title', text)}
        style={styles.input}
      />
      <Text style={styles.label}>Color</Text>
      <FlatList
        data={PRESET_COLORS}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        contentContainerStyle={styles.colorContainer}
      />

      <Button title="Create Category" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  colorButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5,

  },
});

export default CustomCategoryCard;