import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}></View>
  );
}

const styles = StyleSheet.create({

  container: {
    paddingTop: 35,
    backgroundColor: 'ghostwhite',
    overflow: 'hidden',
  },
});
