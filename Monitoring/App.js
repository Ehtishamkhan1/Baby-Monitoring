import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MyStack } from "./Navigation/MyStack";
import registerNNPushToken from 'native-notify';



export default function App() {
  registerNNPushToken(22244, 'aIEEK5gRNUTdV1dvt0to7f');
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
