// import React from "react";
// import { View, Text, ScrollView } from "react-native";

// export default function MesaInfo() {

//   return (
//     <View >
//       <Text >DETALLE DE LAS MESAS</Text>
//     </View>
//   );
// }

import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

export default function MesaInfo() {
    return (
        <View style={styles.container}>
            <SectionList
                sections={DATA}
                renderItem={({ item }) => <Text style={styles.item}>{item.key}{item.numSillas}{item.name}</Text>}
                renderSectionHeader={({ section }) => <Text style={styles.section}>{section.title}{section.id}</Text>}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 22,
        height: 50,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    section: {
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#eee',
        paddingTop: 2,
        paddingLeft: 10,
        paddingTop: 10
    },
    textTitle: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
})

const DATA = [
    {
        title: 'CLIENTE',
        id: '1',
        data: [
            { key: '1', numSillas: ' S4', name: ' Esquina superior' },
            { key: '2', numSillas: ' S8', name: ' Junto a la barra' },
            { key: '3', numSillas: ' S6', name: ' Zona privada' },
            { key: '4', numSillas: ' S2', name: ' Junto al sonido' },
            { key: '5', numSillas: ' S4', name: ' Vista hacia afuera' }
        ]
    },
    {
      title: 'CLIENTE',
      id: '2',
        data: [
            { key: '6', numSillas: ' S2', name: ' Terraza' },
            { key: '7', numSillas: ' S4', name: ' Zona de fumadores' },
            { key: '8', numSillas: ' S4', name: ' Centro' },
            { key: '9', numSillas: ' S8', name: ' Izquierda inferior' },
            { key: '10', numSillas: ' S4', name: ' Planta alta' }
        ]
    },
    {
      title: 'CLIENTE',
      id: '3',  
        data: [
            { key: '11', numSillas: ' S4', name: ' Junto al baño' },
            { key: '12', numSillas: ' S2', name: ' Ensaladas' },
            { key: '13', numSillas: ' S6', name: ' Sala de recepción' },
            { key: '14', numSillas: ' S8', name: ' Sillas periqueras' },
            { key: '15', numSillas: ' S4', name: ' Área infantil' }
        ]
    }
]