import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Orden from "../screens/Orden/Orden";
import OrdenAdd from "../screens/Orden/OrdenAdd";
import OrdenInfo from "../screens/Orden/OrdenInfo";
import OrdenDel from "../screens/Orden/OrdenDel";
import OrdenUpd from "../screens/Orden/OrdenUpd";

const Stack = createStackNavigator();

export default function OrdenesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ordenes"
        component={Orden}
        options={{ title: "LISTA DE ORDENES" }}
      />

      <Stack.Screen
        name="ordenes-add"
        component={OrdenAdd}
        options={{ title: "NUEVA ORDEN" }}
      />

      <Stack.Screen
        name="ordenes-info"
        component={OrdenInfo}
        options={{ title: "INFO ORDENES" }}
      />

      <Stack.Screen
        name="ordenes-del"
        component={OrdenDel}
        options={{ title: "ORDEN" }}
      />

      <Stack.Screen
        name="ordenes-upd"
        component={OrdenUpd}
        options={{ title: "ACTUALIZAR ORDENES" }}
      />

    </Stack.Navigator>



  );
}
