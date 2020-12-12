import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Platillo from "../screens/Platillo/Platillo";
import PlatilloAdd from "../screens/Platillo/PlatilloAdd";
import PlatilloInfo from "../screens/Platillo/PlatilloInfo";
import PlatilloDel from "../screens/Platillo/PlatilloDel";
import PlatilloUpd from "../screens/Platillo/PlatilloUpd";

const Stack = createStackNavigator();

export default function PlatilloStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="platillos"
        component={Platillo}
        options={{ title: "LISTA DE PLATILLOS" }}
      />

      <Stack.Screen
        name="platillos-add"
        component={PlatilloAdd}
        options={{ title: "NUEVO PLATILLO" }}
      />

      <Stack.Screen
        name="platillos-info"
        component={PlatilloInfo}
        options={{ title: "INFO PLATILLOS" }}
      />

      <Stack.Screen
        name="platillos-del"
        component={PlatilloDel}
        options={{ title: "PLATILLO" }}
      />

      <Stack.Screen
        name="platillos-upd"
        component={PlatilloUpd}
        options={{ title: "ACTUALIZAR PLATILLOS" }}
      />

    </Stack.Navigator>



  );
}
