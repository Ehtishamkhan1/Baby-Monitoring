import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Dashboard from '../Screens/Dashboard'
import { AntDesign } from '@expo/vector-icons';
import Babylivestream from '../Screens/Babylivestream'
import Notfications from '../Screens/Notfications'
import Profile from '../Screens/Profile'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';




const Tab=createBottomTabNavigator();
export default function BottomTab() {
  return (

    <Tab.Navigator>
  <Tab.Screen
    name='Dashboard'
    component={Dashboard}
    options={{
      tabBarIcon: ({ focused, color, size }) => (
        <Entypo name="home" size={24} color="black" />
      ),
    }}
  />
  <Tab.Screen
    name='Notification'
    component={Notfications}
    options={{
      tabBarIcon: ({ focused, color, size }) => (
        <Ionicons name="notifications" size={24} color="black" />
      ),
    }}
  />
  <Tab.Screen
    name='Profile'
    component={Profile}
    options={{
      tabBarIcon: ({ focused, color, size }) => (
        <MaterialIcons name="account-box" size={24} color="black" />
      ),
    }}
  />
</Tab.Navigator>

   
  )
}