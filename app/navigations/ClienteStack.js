import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Clientes from "../screens/Cliente";

const Stack = createStackNavigator();

export default function ClientesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="clientes"
        component={Clientes}
        options={{ title: "Clientes" }}
      />
    </Stack.Navigator>
  );
}
