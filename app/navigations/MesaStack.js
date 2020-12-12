import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Mesa from "../screens/Mesa/Mesa";
import MesaAdd from "../screens/Mesa/MesaAdd";
import MesaInfo from "../screens/Mesa/MesaInfo";
import MesaDel from "../screens/Mesa/MesaDel";
import MesaUpd from "../screens/Mesa/MesaUpd";

const Stack = createStackNavigator();

export default function ClientesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="mesas"
        component={Mesa}
        options={{ title: "LISTA DE MESAS" }}
      />

      <Stack.Screen
        name="mesas-add"
        component={MesaAdd}
        options={{ title: "NUEVA MESA" }}
      />

      <Stack.Screen
        name="mesas-info"
        component={MesaInfo}
        options={{ title: "INFO MESAS" }}
      />

      <Stack.Screen
        name="mesas-del"
        component={MesaDel}
        options={{ title: "MESA" }}
      />

      <Stack.Screen
        name="mesas-upd"
        component={MesaUpd}
        options={{ title: "ACTUALIZAR MESAS" }}
      />

    </Stack.Navigator>



  );
}