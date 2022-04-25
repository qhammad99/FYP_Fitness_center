import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { GoalContext } from '../Context/Providers/GoalProvider';
import moment from 'moment';
import Colors from '../colors/Colors';
import {Agenda} from 'react-native-calendars';

const Calendar = props => {
  const Goal = useContext(GoalContext);

  const renderItem =(item) =>{
    return(
      <TouchableOpacity style={styles.item} onPress={()=>{props.shiftDayScreen(item.date)}}>
        <Text style={{color:Colors.darkColor, fontWeight:'bold'}}>{item.name}</Text>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={{color:Colors.lightDark}}>Calories gain: {item.gain}</Text>
          <Text style={{color:Colors.lightDark}}>Calories loose: {item.loose}</Text>
        </View>
      </TouchableOpacity>
    );
  };
      
  return(
      <View style={styles.container}>
        <Agenda
            items={props.items}
            minDate={moment(Goal.goal.data.start_date).local().format('YYYY-MM-DD')}
            maxDate={moment(Goal.goal.data.start_date).local().add(Goal.goal.data.number_of_days-1, 'day').format('YYYY-MM-DD')}
            selected={moment(Goal.goal.data.start_date).local().format('YYYY-MM-DD')}
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