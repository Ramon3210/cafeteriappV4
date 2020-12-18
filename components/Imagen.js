import React from "react";
import { Image,StyleSheet } from "react-native";

export default function Imagen() {
    return(
      <Image
          style={styles.photo}
          source={{ uri: 'https://source.unsplash.com/featured/?{eating}' }}
      />
    );
}

const styles = StyleSheet.create({
    photo: {
      height: 140,
      width: 340,
      marginBottom: 5,
      marginTop: 5
    }
});