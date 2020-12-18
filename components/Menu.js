import React from "react";
import { View,ScrollView,StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Cliente() {
    const navigation = useNavigation();
    return(
        <ScrollView centerContent={true} style={styles.viewBody}>
      <View style={styles.viewBtn}>

      <Button
        title="Agregar cliente"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("clientes-add")}
      />
    </View>

    <View style={styles.viewBtn}>
      <Button
        title="Info cliente"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("clientes-info")}
      />
    </View>

    <View style={styles.viewBtn}>
      <Button
        title="Gestionar cliente"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("clientes-del")}
      />
    </View>
    </ScrollView>
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