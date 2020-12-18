// import React from "react";
// import { View, Text, ScrollView } from "react-native";

// export default function ClienteInfo() {

//   return (
//     <View >
//       <Text >DETALLE DE LOS CLIENTES</Text>
//     </View>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { FlatList, StyleSheet, Text, View } from "react-native";


// export default function ClienteInfo() {

//     const [users, setUsers] = useState([])
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(data => {
//                 setUsers(data)
//                 setLoading(false)
//             })
//     }, [])

//     if (loading) {
//         return <View style={styles.center}><Text>Cargando ...</Text></View>
//     }

//     return (
//         <View style={styles.container} >
//             <FlatList
//                 data={users}
//     renderItem={({ item }) => <Text style={styles.item}>{item.id}{item.name}</Text>}
//                 keyExtractor={item => String(item.id)}
//             />
//         </View >
//     );
// }


// const styles = StyleSheet.create({
//     center: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'stretch',
//         justifyContent: 'center',
//         paddingTop: 22
//     },
//     item: {
//         padding: 10,
//         fontSize: 22,
//         height: 50,
//         borderBottomColor: '#ccc',
//         borderBottomWidth: 1
//     },
// })

import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

export default function ClienteInfo() {
    return (
        <View style={styles.container}>
            <SectionList
                sections={DATA}
                renderItem={({ item }) => <Text style={styles.item}>{item.key}{item.tipo}{item.fechaNaci}{item.acompa}{item.menores}</Text>}
                renderSectionHeader={({ section }) => <Text style={styles.section}>{section.id}{section.nick}</Text>}
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
        id: '1',
        nick: ' Juan Pérez Frías',
        data: [
            { key: '1', tipo: ' Frecuente' },
            { key: '2', fechaNaci: ' 19/12/1985' },
            { key: '3', acompa: ' 3' },
            { key: '4', menores: ' 1' },        ]
    },
    {
      id: '2',
      nick: ' Anastasia Florentina López',
        data: [
            { key: '1', tipo: ' Ocasional' },
            { key: '2', fechaNaci: ' 25/10/1995' },
            { key: '3', acompa: ' 2' },
            { key: '4', menores: ' 0' },
        ]
    },
    {
       id: '3',
       nick: 'Rodolfo Segura Jacobo',
        data: [
            { key: '1', tipo: ' Consentido' },
            { key: '2', fechaNaci: ' 15/04/1980' },
            { key: '3', acompa: ' 10' },
            { key: '4', menores: ' 2' },
        ]
    }
]