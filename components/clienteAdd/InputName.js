import React from "react";
import { Input } from "react-native-elements";

    export default function InputName() {
        return (
            <Input
            placeholder='NOMBRE'
            editable={false}
            leftIcon={{ 
            type: 'material-community', 
            name: 'message-text',
            size: 24,
            color:'#4B413F',
            }}
            /> 
        );
    }