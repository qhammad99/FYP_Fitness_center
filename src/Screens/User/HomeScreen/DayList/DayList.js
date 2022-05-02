// For display all days in one calendar
import React,{useEffect, useState, useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Calendar from '../../../../components/Calendar';
import {AuthContext} from '../../../../Context/Providers/AuthProvider';
import { GoalContext } from '../../../../Context/Providers/GoalProvider';
import { TaskContext } from '../../../../Context/Providers/TaskProvider';
import progressByGoal from '../../../../Context/Actions/progressByGoal';
import moment from 'moment';

const DayList = props =>{
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
    
        if(Task.tasks.progress == null)
          progressByGoal(Goal)(Task)(authentication);
        else{
          let checkedIndex = 0;
          let collection = allDates.reduce((acc, currentItem, index)=>{
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
    },[Task.tasks.progress]);
    
    useEffect(()=>{}, [items]);

    return(
        <View style={styles.container}>
            {Object.keys(items).length !=0  &&
                <Calendar shiftDayScreen={dayNumber => props.navigation.navigate('ToDo', {dayDate: dayNumber})} items={items}/>
            }
        </View>
    );
};

const styles= StyleSheet.create({
    container:{
        flex:1
    }
});

export default DayList;