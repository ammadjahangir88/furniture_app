import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../assets/constants/index';
const BottomTabNavigation = () => {
  const screenOptions={
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle:{
        position: 'absolute',
        bottom:0,
        right:0,
        left:0,
        elevation:0,
        height: 70,
    }
  }
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name="Home" component={Home}  options={{
        tabBarIcon: ({focused})=>(
            return <Ionicons name={focused ? 'Home': 'home-outline'} size={24} 
            color={focused ? COLORS.primary : COLORS.gray2}
            color={focused ? COLORS.primary : COLORS.gray2}
        )
        />
    }}/>
    <Tab.Screen name="Search" component={Search}/>
    <Tab.Screen name="Profile" component={Profile}/>
  </Tab.Navigator>
  )
}

export default BottomTabNavigation