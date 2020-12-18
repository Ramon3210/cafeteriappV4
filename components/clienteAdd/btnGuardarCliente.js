import React from "react";
import { View , StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export default function btnGuardarCliente() {
    return (
    <View style={styles.viewBtn}>
    <Button
      title="Guardar"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={() => navigation.navigate("clientes")}
    />
</View>
      );
    }

    const styles = StyleSheet.create({
      viewBody: {
        marginLeft: 30,
        marginRight: 30
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