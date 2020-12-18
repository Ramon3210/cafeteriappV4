import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Picker } from "react-native";
import { Input } from "react-native-elements";

export default function InputMenores() {
    return (
<Input
placeholder='MENORES DE EDAD'
leftIcon={{ 
  type: 'material-community', 
  name: 'baby-carriage',
  size: 24,
  color:'#4B413F'
}}
/>
      );
    }