import React, { useState } from "react";
    import { StyleSheet, View, Text, ScrollView, Picker } from "react-native";
    import { Button, Input } from "react-native-elements";
    import { useNavigation } from "@react-navigation/native";

    import { Calendar } from 'react-native-calendars';
    import {LocaleConfig} from 'react-native-calendars';
    import RNPickerSelect from 'react-native-picker-select';

    export default function ClienteDel() {
      const navigation = useNavigation();
      const [selectedValue, setSelectedValue] = useState("Tipo de cliente");
      return (
        <ScrollView centerContent={true} style={styles.viewBody}>
        <Text style={styles.textTitle}>Clientes</Text>
        <View style={{padding: 2, flex: 1, backgroundColor: '#fff'}}>
    
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

    <Input
      placeholder='NOMBRE'
      editable={false}
      leftIcon={{ 
        type: 'material-community', 
        name: 'android-messages',
        size: 24,
        color:'#4B413F'
      }}
    /> 

<Text>FECHA</Text>

<Calendar
  markingType={'period'}
  markedDates={{
    '2020-12-18': {marked: true, dotColor: '#50cebb'},
    '2021-12-16': {marked: true, dotColor: '#50cebb'},
    '2021-12-21': {startingDay: true, color: '#50cebb', textColor: 'white'},
    '2021-12-22': {color: '#70d7c7', textColor: 'white'},
    '2021-12-23': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
    '2021-12-24': {color: '#70d7c7', textColor: 'white'},
    '2021-12-25': {endingDay: true, color: '#50cebb', textColor: 'white'},
  }}
/> 

     <Input
      placeholder='FECHA DE NACIMIENTO'
      editable={false}
      leftIcon={{ 
        type: 'material-community', 
        name: 'calendar',
        size: 24,
        color:'#4B413F'
      }}
    />  

{/* 
    <Input
      placeholder='TIPO DE CLIENTE'
      leftIcon={{ 
        type: 'material-community', 
        name: 'clipboard-account',
        size: 24,
        color:'#4B413F'
      }}
    /> */}

<Text>TIPO DE CLIENTE</Text>

        <View style={styles.container}>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            
            <Picker.Item label="Consentido" value="CON" />
            <Picker.Item label="Preferente" value="PRE" />
            <Picker.Item label="Ocasional" value="OCA" />
          </Picker>
        </View>

    {/* <Input
      placeholder='ACOMPAÑANTES'
      leftIcon={{ 
        type: 'material-community', 
        name: 'account-supervisor',
        size: 24,
        color:'#4B413F'
      }}
    /> */}

<Text>NÚMERO DE ACOMPAÑANTES</Text>

        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'UNO', value: '1' },
                { label: 'DOS', value: '2' },
                { label: 'TRES', value: '3' },
                { label: 'CUATRO', value: '4' },
                { label: 'CINCO', value: '5' },
                { label: 'SEIS', value: '6' },
                { label: 'SIETE', value: '7' },
                { label: 'OCHO', value: '8' },
                { label: 'NUEVE', value: '9' },
                { label: 'DIEZ', value: '10' },
                { label: 'VEINTE', value: '20' },
                { label: 'TREINTA', value: '30' },
                { label: 'CUARENTA', value: '40' },
                { label: 'CINCUENTA', value: '50' },
                { label: 'TODA LA TRIBU', value: '100' },
            ]}
        />

    <Input
      placeholder='MENORES DE EDAD'
      editable={false}
      leftIcon={{ 
        type: 'material-community', 
        name: 'baby-carriage',
        size: 24,
        color:'#4B413F'
      }}
    />

    <View style={styles.viewBtns}>
          <Button
            title="Eliminar"
            buttonStyle={styles.btnStyle}
            containerStyle={styles.btnContainer}
            onPress={() => navigation.navigate("clientes")}
          />

          <Button
            title="Actualizar"
            buttonStyle={styles.btnStyle}
            containerStyle={styles.btnContainer}
            onPress={() => navigation.navigate("clientes")}
          />
    </View>

        </View>
        </ScrollView>
      );
    }

    // const styles = StyleSheet.create({
    //   container: {
    //     flex: 1,
    //     paddingTop: 40,
    //     alignItems: "center"
    //   }
    // });

    LocaleConfig.locales['fr'] = {
      monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
      monthNamesShort: ['Ene.','Feb.','Mar','Abr','May','Jun','Jul.','Ago','Sept','Oct','Nov','Dic'],
      dayNames: ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
      dayNamesShort: ['Dom.','Lun.','Mar.','Mie.','Jue.','Vie.','Sab.'],
      today: 'Aujourd\'hui'
    };
    LocaleConfig.defaultLocale = 'fr';

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
      btnStyle: {
        backgroundColor: "#4B413F",
        flexDirection: 'column'
      },
      btnContainer: {
        width: "35%",
      },
      viewBtn: {
        flex: 6,
        alignItems: "center",
        marginBottom:30
      },
      viewBtns: {
        flex: 6,
        alignItems: "center",
        marginBottom:30
      }
    });