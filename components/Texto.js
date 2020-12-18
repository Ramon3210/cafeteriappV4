import React from "react";
import { Text,StyleSheet } from "react-native";

export default function Texto() {
    return(
        <Text style={styles.textTitle}>Clientes</Text>
    );
}

const styles = StyleSheet.create({
    textTitle: {
      marginTop: 20,
      marginBottom: 20,
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    }
  });