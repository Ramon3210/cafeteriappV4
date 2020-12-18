import React from "react";
import { Input } from "react-native-elements";

    export default function InputFechNac() {
        return (
            <Input
            placeholder='FECHA DE NACIMIENTO'
            editable={false}
            leftIcon={{ 
            type: 'material-community', 
            name: 'calendar',
            size: 24,
            color:'#4B413F',
            }}
            /> 
        );
    }