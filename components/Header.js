import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Overview</Text>
    </View>
    /* <View style={styles.container}>
       <LinearGradient
         start={{ x: 0, y: 0 }}
         end={{ x: 1, y: 1 }}
         colors={['#6f96e9', '#ab7beb', '#d761a9']} // original -> '#6f96e9', '#ab7beb', '#d761a9'
         style={styles.gradient}
       >
         <Text style={styles.title}>Task Overview</Text>
       </LinearGradient>
     </View>
 */
  );
}

const styles = StyleSheet.create({

  container: {
    paddingBottom: 10,
    backgroundColor: 'ghostwhite',
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  title: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
