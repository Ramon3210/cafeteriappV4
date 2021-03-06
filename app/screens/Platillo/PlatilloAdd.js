import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Input } from 'react-native-elements';

export default function PlatilloAdd() {

  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
    <Text style={styles.textTitle}>Platillos</Text>

     <View style={{padding: 10, flex: 1, backgroundColor: '#fff'}}>

<Input placeholder='NÚMERO DE PLATILLO'/>

<Input placeholder='DESCRIPCIÓN'/> 

<Input placeholder='PORCIONES'/> 

<Input placeholder='PRECIO'/> 

<Input placeholder='HORA'/> 

<Input placeholder='COMENTARIOS'/> 

<View style={styles.viewBtn}>
      <Button
        title="Guardar"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("platillos")}
      />
    </View>
     </View>
     </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },
  textTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  btnAddMaestro: {
    marginBottom: 5
  },
  btnStyle: {
    backgroundColor: "#4B413F"
  },
  btnContainer: {
    width: "70%"
  },
  viewBtn: {
    flex: 6,
    alignItems: "center",
    marginBottom:30
  }
});