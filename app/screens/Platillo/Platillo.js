import React from "react";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Platillo() {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Text style={styles.textTitle}>Platillos</Text>

      <View style={styles.viewBtn}>

      {/* source={require('./../../../assets/alumnos1.png')} */}
      {/* source={{ uri: 'https://picsum.photos/200/300' }} */}
      {/* source={{ uri: 'https://source.unsplash.com/daily' }} */}
      <Image
        style={styles.photo}
        source={{ uri: 'https://source.unsplash.com/featured/?{coffee}' }}
      />

        <Button
          title="Agregar platillo"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("platillos-add")}
        />
      </View>

      <View style={styles.viewBtn}>
        <Button
          title="Info platillos"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("platillos-info")}
        />
      </View>

      <View style={styles.viewBtn}>
        <Button
          title="Gestionar platillo"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("platillos-del")}
        />
      </View>

      {/* <View style={styles.viewBtn}>
        <Button
          title="Actualizar platillos"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("platillos-upd")}
        />
      </View> */}

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
    title: "Platillo 1",
    icon: "account"
  },
  {
    title: "Platillo 2",
    icon: "account-outline"
  }
];
