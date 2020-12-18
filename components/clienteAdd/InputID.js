import React from "react";
import { Input } from "react-native-elements";

    export default function InputID() {
        return (
            <Input
            placeholder='IDENTIFICADOR'
            editable={false}
            leftIcon={{ 
            type: 'material-community', 
            name: 'account',
            size: 24,
            color:'#4B413F',
            }}
            /> 
        );
    }