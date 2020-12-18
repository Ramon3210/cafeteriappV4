import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cliente from "../navigations/../screens/Cliente/Cliente";
import ClienteAdd from "../../components//clienteAdd/ClienteAdd";
import ClienteInfo from "../../components/ClienteInfo";
import ClienteDel from "../../components/ClienteDel";
import ClienteUpd from "../../components/ClienteUpd";

const Stack = createStackNavigator();

export default function ClientesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="clientes"
        component={Cliente}
        options={{ title: "LISTA DE CLIENTES" }}
      />

      <Stack.Screen
        name="clientes-add"
        component={ClienteAdd}
        options={{ title: "NUEVO CLIENTE" }}
      />

      <Stack.Screen
        name="clientes-info"
        component={ClienteInfo}
        options={{ title: "INFO CLIENTES" }}
      />

      <Stack.Screen
        name="clientes-del"
        component={ClienteDel}
        options={{ title: "CLIENTE" }}
      />

      <Stack.Screen
        name="clientes-upd"
        component={ClienteUpd}
        options={{ title: "ACTUALIZAR CLIENTE" }}
      />

    </Stack.Navigator>



  );
}
