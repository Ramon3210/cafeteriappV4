import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, ScrollView } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Input } from 'react-native-elements';

export default function MesaAdd() {
  const navigation = useNavigation();
  const [txtNumMesa, setNumMesa] = useState('Escribe el número de mesa ...');

  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
    <Text style={styles.textTitle}>Mesas</Text>

     <View style={{padding: 10, flex: 1, backgroundColor: '#fff'}}>

                <Text>Número de mesa</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtNumMesa}
                    onChangeText={n => setNumMesa(n)}
                />

<Input placeholder='CANTIDAD DE SILLAS'/> 

<Input placeholder='UBICACIÓN'/> 

<View style={styles.viewBtn}>
      <Button
        title="Guardar"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("mesas")}
      />
    </View>

                <Text style={styles.textTitle}>DATOS DE LA MESA</Text>
                <Text>NÚMERO: {txtNumMesa}</Text>

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