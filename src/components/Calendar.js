import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';
import Colors from '../colors/Colors';
import {Agenda} from 'react-native-calendars';
import {AuthContext} from '../Context/Providers/AuthProvider';
import { GoalContext } from '../Context/Providers/GoalProvider';
import { TaskContext } from '../Context/Providers/TaskProvider';
import progressByGoal from '../Context/Actions/progressByGoal';

const Calendar = props => {
  const authentication = useContext(AuthContext);
  const Goal = useContext(GoalContext);
  const Task = useContext(TaskContext);
  const [allDates, setAllDates] = useState([]);
  const[items, setItems] = useState({});

  useEffect(()=>{
    if(allDates.length ==0 )
      for(i=0; i<Goal.goal.data.number_of_days; i++){
        let date = moment(Goal.goal.data.start_date).local().add(i, 'day').format('YYYY-MM-DD');
        setAllDates(recDates => [...recDates, date]);
      }
    let testing = true;
    if(testing){
      if(Task.tasks.progress == null)
        progressByGoal(Goal)(Task)(authentication);
      else{
        let collection;
        let checkedIndex = 0;
        collection = allDates.reduce((acc, currentItem, index)=>{
         const date = currentItem;
         if(Task.tasks.progress.length > 0 && Task.tasks.progress[checkedIndex]){
          //  compare date
          if(moment(date, "YYYY-MM-DD").local().isSame(moment(Task.tasks.progress[checkedIndex].day_date).local())){
            acc[date] = [{
              name: `Day # ${index+1}`, 
              date: `${date}`,
              gain: Task.tasks.progress[checkedIndex].calories_gain,
              loose: Task.tasks.progress[checkedIndex].calories_burn
            }];
            checkedIndex++;
          }else
            acc[date] = [{name: `Day # ${index+1}`,date: `${date}`, gain: 0, loose: 0}];
         }else
          acc[date] = [{name: `Day # ${index+1}`,date: `${date}`, gain: 0, loose: 0}];
  
        return acc;
        },{});
        setItems(collection);
      }
    }
    return () => {
      // clear the progress so calendar component loads latest code
      if(Task.tasks.progress != null)
        Task.setTasks({type:"RESET_PROGRESS"})
      testing = false 
    }; 
  },[Task.tasks.progress]);

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
            items={items}
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