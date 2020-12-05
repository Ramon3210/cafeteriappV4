import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pagos from "../screens/Pago";

const Stack = createStackNavigator();

export default function PagoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="pagos"
        component={Pagos}
        options={{ title: "Pagos" }}
      />
    </Stack.Navigator>
  );
}
