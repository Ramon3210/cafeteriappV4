import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pago from "../screens/Pago/Pago";
import PagoAdd from "../screens/Pago/PagoAdd";
import PagoInfo from "../screens/Pago/PagoInfo";
import PagoDel from "../screens/Pago/PagoDel";
import PagoUpd from "../screens/Pago/PagoUpd";

const Stack = createStackNavigator();

export default function PagosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="pagos"
        component={Pago}
        options={{ title: "LISTA DE PAGOS" }}
      />

      <Stack.Screen
        name="pagos-add"
        component={PagoAdd}
        options={{ title: "NUEVO PAGO" }}
      />

      <Stack.Screen
        name="pagos-info"
        component={PagoInfo}
        options={{ title: "INFO PAGOS" }}
      />

      <Stack.Screen
        name="pagos-del"
        component={PagoDel}
        options={{ title: "BORRAR PAGO" }}
      />

      <Stack.Screen
        name="pagos-upd"
        component={PagoUpd}
        options={{ title: "ACTUALIZAR PAGOS" }}
      />

    </Stack.Navigator>



  );
}

