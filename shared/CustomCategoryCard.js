import React from 'react';
import { Button, View, TextInput, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import TasksContext from './TasksContext';

const CustomCategoryCard = ({ navigation }) => {

  const { register, handleSubmit, setValue, watch } = useForm();
  const { dispatch } = useContext(TasksContext);
  const selectedColor = watch('color'); // Watch the 'color' field for changes.
  const PRESET_COLORS = [
    // Going to adjust colour range and put them in order later.
    // Add accessibility features later on as well, i.e., colour blindness colour options.   
    '#EFB0A1', // Melon
    '#CBBAED', // Periwinkle (lavender)
    '#F62DAE', // Persian Rose (bright pink)
    '#824670', // Plum
    '#A2999E', // Rose Quartz
    '#80A4ED', // Vista Blue
    '#3ABEFF', // Deep Sky Blue
    '#2B3A67', // Delft Blue
    '#254441', // Dark Slate Gray - looks dark green tbh
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
      style={[
        styles.colorButton,
        { backgroundColor: color },
        color === selectedColor ? styles.selectedColor : null, // Add an extra style when this color is selected
      ]}
      onPress={() => setValue('color', color)}
    />
  );

  /*const renderItem = ({ item: color }) => (
    <TouchableOpacity
      style={[styles.colorButton, { backgroundColor: color }]}
      onPress={() => setValue('color', color)}
    />
  );
*/
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
      <View style={styles.buttonStyle}>
        <Button title='Create Category' color='white' onPress={handleSubmit(onSubmit)} />
      </View>
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
    borderRadius: 15,
    marginBottom: 20,
    padding: 10,
  },
  label: {
    fontSize: 13,
    fontFamily: 'Verdana',
    paddingLeft: 10,
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
  buttonStyle: {
    padding: 6,
    margin: 40,
    height: 50,
    width: 303,
    borderRadius: 15,
    backgroundColor: '#6f96e9',
  },
  selectedColor: {
    borderWidth: 2,
    borderColor: 'rgba(128, 128, 128, 0.5)', // A darker border.
    shadowColor: '#000', // Shadow color.
    shadowOffset: {
      width: 0,
      height: 2, // Shadow position.
    },
    shadowOpacity: 0.25, // Shadow opacity.
    shadowRadius: 3.84, // Shadow blurring.
    elevation: 5, // Shadow on Android.
  },
});

export default CustomCategoryCard;