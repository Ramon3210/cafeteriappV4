import React from "react";
import { Calendar , LocaleConfig } from 'react-native-calendars';

export default function Calendario() {
    return (
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
      );
    }

    LocaleConfig.locales['fr'] = {
      monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
      monthNamesShort: ['Ene.','Feb.','Mar','Abr','May','Jun','Jul.','Ago','Sept','Oct','Nov','Dic'],
      dayNames: ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
      dayNamesShort: ['Dom.','Lun.','Mar.','Mie.','Jue.','Vie.','Sab.'],
      today: 'Aujourd\'hui'
    };
    LocaleConfig.defaultLocale = 'fr';