import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Ordenes from "../screens/Orden";

const Stack = createStackNavigator();

export default function OrdenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ordenes"
        component={Ordenes}
        options={{ title: "Ordenes" }}
      />
    </Stack.Navigator>
  );
}
