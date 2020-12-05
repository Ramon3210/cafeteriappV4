import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Platillos from "../screens/Platillo";

const Stack = createStackNavigator();

export default function PlatilloStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="platillos"
        component={Platillos}
        options={{ title: "Platillos" }}
      />
    </Stack.Navigator>
  );
}
