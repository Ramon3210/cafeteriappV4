import React from "react";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Pago() {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Text style={styles.textTitle}>Pagos</Text>

      <View style={styles.viewBtn}>

      <Image
        style={styles.photo}
        source={{ uri: 'https://source.unsplash.com/featured/?{creditcard}' }}
      />

        <Button
          title="Agregar pago"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("pagos-add")}
        />
      </View>

      <View style={styles.viewBtn}>
        <Button
          title="Info pagos"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("pagos-info")}
        />
      </View>

      <View style={styles.viewBtn}>
        <Button
          title="Gestionar pago"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("pagos-del")}
        />
      </View>

      {list.map((item, i) => (
        <ListItem key={i} bottomDivider>
          <Icon name={item.icon} type="material-community" />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
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
  },
  photo: {
    height: 140,
    width: 340,
    marginBottom: 5,
    marginTop: 5
  }
});

const list = [
  {
    title: "Pago 1",
    icon: "account"
  },
  {
    title: "Pago 2",
    icon: "account-outline"
  }
];
