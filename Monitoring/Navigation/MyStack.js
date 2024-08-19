import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login";
import Registration from "../Screens/Registration";
import BottomTab from "./BottomTab";
import { useState, useEffect } from "react";
import { firebase } from "../Config";
import Babylivestream from "../Screens/Babylivestream";

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
   
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Babylivestream"
        component={Babylivestream}
      
      />
      
    </Stack.Navigator>
  );
}
