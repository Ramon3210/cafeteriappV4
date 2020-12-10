import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

import { FloatingLabelInput , globalStyles } from 'react-native-floating-label-input';



import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default function ClienteAdd() {
  const [idCliente, setIdCliente] = useState('');  

  //const [nick, setNick] = useState('');


  return (
     <View style={{padding: 50, flex: 1, backgroundColor: '#fff'}}>
       {/* <Text>Identificador del cliente:</Text> */}
       <FloatingLabelInput
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
      />

{/* <Input
  placeholder='BASIC INPUT'
/>

<Input
  placeholder='INPUT WITH ICON'
  leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
/>

<Input
  placeholder='INPUT WITH CUSTOM ICON'
  leftIcon={
    <Icon
      name='user'
      size={24}
      color='black'
    />
  }
/>


  <Input
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
/> */}


     </View>
  );
}



