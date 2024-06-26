import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import globalStyles from './globalStyles'; // adjust the path as needed
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Cart,ProductDetails,NewRivals } from './screens';

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
     <Stack.Screen 
     name='ProductDetails'
     component={ProductDetails}
     />

       <Stack.Screen 
     name='ProductList'
     component={NewRivals}
     />
   </Stack.Navigator>
   </NavigationContainer>
  );
}


