import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { FloatingLabelInput , globalStyles } from 'react-native-floating-label-input';
import { useNavigation } from "@react-navigation/native";



import { Input } from 'react-native-elements';

export default function ClienteAdd() {
  const [idCliente, setIdCliente] = useState('');  

  const [nick, setNick] = useState('');

  const navigation = useNavigation();

  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
    <Text style={styles.textTitle}>Clientes</Text>


     <View style={{padding: 10, flex: 1, backgroundColor: '#fff'}}>
       {/* <Text>Identificador del cliente:</Text> */}
       {/* <FloatingLabelInput
        label="Identificador del cliente"
        value={idCliente}
        staticLabel
        hintTextColor={'#aaa'}
        containerStyles={{
          borderWidth: 2,
          paddingHorizontal: 10,
          backgroundColor: '#fff',
          borderColor: 'brown',
          borderRadius: 8,
        }}
        customLabelStyles={{
          colorFocused: 'brown',
          fontSizeFocused: 12,
        }}
        labelStyles={{
          backgroundColor: '#fff',
          paddingHorizontal: 5,
        }}
        inputStyles={{
          color: 'black',
          paddingHorizontal: 10,
        }}
        onChangeText={value => setIdCliente(value)}
      /> */}

 {/* <Input
  placeholder='IDENTIFICADOR'
/> */}


{/* <Input
  placeholder='IDENTIFICADOR'
  leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
/> */}

<Input
  placeholder='IDENTIFICADOR'
  // leftIcon={
  //   <Icon
  //     name='user'
  //     size={24}
  //     color='black'
  ///>
  //}
/>

  <Input
  placeholder='NOMBRE'
/> 

<Input
  placeholder='EDAD'
/> 

<Input
  placeholder='TIPO DE CLIENTE'
/> 

<Input
  placeholder='ACOMPAÑANTES'
/> 

<Input
  placeholder='MENORES DE EDAD'
/> 

<View style={styles.viewBtn}>
      <Button
        title="Guardar"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("clientes")}
      />
    </View>

  {/* <Input
   placeholder="Comment"
   leftIcon={{ type: 'font-awesome', name: 'comment' }}
   style={{padding: 5, flex: 1, backgroundColor: '#fff'}}
   onChangeText={value => this.setState({ comment: value })}
  /> 


<Input
  placeholder='INPUT WITH ERROR MESSAGE'
  errorStyle={{ color: 'red' }}
  errorMessage='ENTER A VALID ERROR HERE'
/> 

 <Input placeholder="Password" secureTextEntry={true} /> 

      <FloatingLabelInput
        label="Identificador"
        value={nick}
        maskType="currency"
        // currencyDivider="." // which generates: 9.999.999,99 or 0,99 ...
        keyboardType="text"
        onChangeText={value => setNick(value)}
/>  */}


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



