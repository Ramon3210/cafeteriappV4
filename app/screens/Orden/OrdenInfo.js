 import React from "react";
 import { View, Text, ScrollView } from "react-native";

 export default function OrdenInfo() {

   return (
     <View >
       <Text >DETALLE ORDENES</Text>
     </View>
   );
 }

// import React, { useState } from "react";
// import { View, Picker, StyleSheet } from "react-native";

//  export default function OrdenInfo() {
//   const [selectedValue, setSelectedValue] = useState("java");
//   return (
//     <View style={styles.container}>
//       <Picker
//         selectedValue={selectedValue}
//         style={{ height: 50, width: 150 }}
//         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//       >
//         <Text>TIPO DE CLIENTE</Text>
//         <Picker.Item label="Java" value="java" />
//         <Picker.Item label="JavaScript" value="js" />
//         <Picker.Item label="ReactNative" value="RN" />
//       </Picker>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 40,
//     alignItems: "center"
//   }
// });