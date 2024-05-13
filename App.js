import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import globalStyles from './globalStyles'; // adjust the path as needed
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer  >
   <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen
     name='Bottom Navigation'
     component={BottomTabNavigation}
     
     />
     <Stack.Screen
     name='Cart'
     component={Cart}
     
     />
   </Stack.Navigator>
   </NavigationContainer>
  );
}


