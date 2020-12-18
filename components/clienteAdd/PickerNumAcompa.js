import React from "react";
import RNPickerSelect from 'react-native-picker-select';

export default function ClienteAdd() {
    return (
        <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={[
            { label: 'ALONE', value: '0' },
            { label: 'UNO', value: '1' },
            { label: 'DOS', value: '2' },
            { label: 'TRES', value: '3' },
            { label: 'CUATRO', value: '4' },
            { label: 'CINCO', value: '5' },
            { label: 'SEIS', value: '6' },
            { label: 'SIETE', value: '7' },
            { label: 'OCHO', value: '8' },
            { label: 'NUEVE', value: '9' },
            { label: '>DIEZ', value: '10' },
            { label: '>VEINTE', value: '20' },
            { label: '>TREINTA', value: '30' },
            { label: '>CUARENTA', value: '40' },
            { label: '>CINCUENTA', value: '50' },
            { label: 'TODA LA TRIBU', value: '100' },
        ]}
    />
    );
    }