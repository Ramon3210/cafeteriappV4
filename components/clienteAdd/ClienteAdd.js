    import React, { useState } from "react";
    import { StyleSheet, View, ScrollView } from "react-native";
    import Texto from './Texto';
    import InputID from './InputID';
    import InputName from './InputName';
    import Calendario from './Calendario';
    import InputFechNac from './InputFechNac';
    import TextoTipoCliente from './TextoTipoCliente';
    import PickerTipoCliente from './PickerTipoCliente';
    import TextoNumAcompa from './TextoNumAcompa';
    import PickerNumAcompa from './PickerNumAcompa';
    import InputMenores from './InputMenores';
    import btnGuardarCliente from './btnGuardarCliente';

    export default function ClienteAdd() {
      return (
        <ScrollView centerContent={true} style={styles.viewBody}>

        <Texto />

        <View>
          <InputID />
          <InputName />
          <Calendario />
          <InputFechNac />
          <TextoTipoCliente />
          <PickerTipoCliente />
          <TextoNumAcompa />
          <PickerNumAcompa />
          <InputMenores />
          <btnGuardarCliente />
        </View>
        </ScrollView>
      );
    }

const styles = StyleSheet.create({
      viewBody: {
        marginLeft: 30,
        marginRight: 30
      }
});