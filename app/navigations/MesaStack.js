import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Mesas from "../screens/Mesa";

const Stack = createStackNavigator();

export default function MesasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="mesas"
        component={Mesas}
        options={{ title: "Mesas" }}
      />
    </Stack.Navigator>
  );
}
