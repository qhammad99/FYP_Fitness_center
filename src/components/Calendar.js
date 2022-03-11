import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../colors/Colors';
import {Agenda} from 'react-native-calendars';


// this function is also used in loadItem function
// const timeToString = (time) => {
//     const date = new Date(time);
//     return date.toISOString().split('T')[0];
//   }

const Calendar = props => {
    const[items, setItems] = useState({
      '2022-02-20': [{name: 'Day # 1', gain: 250, loose: 100}],
      '2022-02-21': [{name: 'Day # 2', gain: 350, loose: 200}],
      '2022-02-22': [{name: 'Day # 3', gain: 450, loose: 300}],
      '2022-02-23': [{name: 'Day # 4', gain: 550, loose: 400}],
      '2022-02-24': [{name: 'Day # 5', gain: 650, loose: 500}],
      '2022-02-25': [{name: 'Day # 6', gain: 750, loose: 600}],
      '2022-02-26': [{name: 'Day # 7', gain: 850, loose: 700}],
      '2022-02-27': [{name: 'Day # 8', gain: 950, loose: 800}],
      '2022-02-28': [{name: 'Day # 9', gain: 150, loose: 900}],

    });

    // this function is for example of auto render
    // const loadItems = (day) => { 
    //     const items = items || {};
    
    //     setTimeout(() => {
    //         for (let i = -15; i < 85; i++) {
    //         const time = day.timestamp + i * 24 * 60 * 60 * 1000;
    //         const strTime = timeToString(time);
    
    //         if (!items[strTime]) {
    //           items[strTime] = [];
              
    //           const numItems = Math.floor(Math.random() * 3 + 1);
    //           for (let j = 0; j < numItems; j++) {
    //             items[strTime].push({
    //               name: 'Item for ' + strTime + ' #' + j,
    //               height: Math.max(50, Math.floor(Math.random() * 150)),
    //               day: strTime
    //             });
    //           }
    //         }
    //       }
          
    //       const newItems= {};
    //       Object.keys(items).forEach(key => {
    //         newItems[key] = items[key];
    //       });
    //       setItems(newItems);
    //     }, 1000);
    //   }

      const renderItem =(item) =>{
        return(
          <TouchableOpacity style={styles.item} onPress={props.shiftDayScreen}>
            <Text style={{color:Colors.darkColor, fontWeight:'bold'}}>{item.name}</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={{color:Colors.lightDark}}>Calories inc{item.gain}</Text>
              <Text style={{color:Colors.lightDark}}>Calories dec{item.loose}</Text>
            </View>
          </TouchableOpacity>
        );
      };
    return(
        <View style={styles.container}>
          <Agenda
              items={items}
              minDate={'2022-02-20'}
              maxDate={'2022-02-28'}
              selected={'2022-02-24'}
              pastScrollRange={50}
              renderItem={renderItem}
              theme={{
                agendaKnobColor: Colors.lightDark,
                selectedDayBackgroundColor: Colors.selectedColor,
                dotColor:'#fff',
                textSectionTitleColor: Colors.primary
              }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    item: {
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      marginTop: 17
    },
    emptyDate: {
      height: 15,
      flex: 1,
      paddingTop: 30
    }
});
export default Calendar;