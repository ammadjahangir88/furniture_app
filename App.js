import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import globalStyles from './globalStyles'; // adjust the path as needed

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: 'Poppins-regular', // Ensure you use the correct internal name of the font
    fontSize: 16,
  }
});
