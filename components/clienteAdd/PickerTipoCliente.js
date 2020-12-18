import React , { useState } from "react";
import { Picker } from "react-native";

export default function PickerTipoCliente() {
    const [selectedValue, setSelectedValue] = useState("Tipo de cliente");
    return (
<Picker
selectedValue={selectedValue}
style={{ height: 50, width: 150 }}
onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
>

<Picker.Item label="Consentido" value="CON" />
<Picker.Item label="Preferente" value="PRE" />
<Picker.Item label="Ocasional" value="OCA" />
</Picker>
      );
    }