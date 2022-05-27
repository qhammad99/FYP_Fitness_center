import React, {useState, useEffect, useContext} from 'react';
import {
  View, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  Image, 
  ActivityIndicator,
  FlatList,
  Text
} from 'react-native';
import CustomSwitch from '../../../components/ScheduleComponents/CustomSwitch';
import DayTitle from '../../../components/ScheduleComponents/DayTitle';
import TaskComponent from '../../../components/ScheduleComponents/TasksComponent';
import Colors from '../../../colors/Colors';
import {AuthContext} from '../../../Context/Providers/AuthProvider';
import { TaskContext } from '../../../Context/Providers/TaskProvider';
import scheduleByDay from '../../../Context/Actions/scheduleByDay';
import {useNavigation} from '@react-navigation/native'

export default function ScheduleScreen() {
  const authentication = useContext(AuthContext);
  const Task = useContext(TaskContext);

  const navigation = useNavigation();
    
  const [day, setDay] = useState(1);
  const onSelectSwitch = value => {
      setDay(value);
  };

  useEffect(()=>{
      scheduleByDay(day)(Task)(authentication);
  },[day]);

  const getImage = imageAddress =>{
    switch(imageAddress){
        case "breakfast":
            return require("../../../images/breakfast.jpg");

        case "morning":
            return require("../../../images/morningExercise.jpg");
    }
}

  return (
    <SafeAreaView style={styles.container}>

      {/* days bar */}
      <View style={{paddingHorizontal: 10, marginTop: 10}}>
        <CustomSwitch onSelectSwitch={onSelectSwitch}/>
      </View>

      {/* day title */}
      <DayTitle dayNumber={day} />

      {/* tasks */}
      {
        (!Task.tasks.isLoading)
        ?
        <FlatList 
                data={Task.tasks.tasks}
                style={{marginTop:20}}
                renderItem={
                    ({item, index})=>
                    !item.empty?
                        <TaskComponent 
                            item= {item}
                            index= {index}
                            taskImage={
                                item.category == 'Workout' || item.category == 'extra_workout'?
                                getImage("morning"):
                                getImage("breakfast")
                            }
                            to={()=>navigation.navigate('Task Detail', {
                              TaskName: item.category == 'Workout'?
                                item.workoutName:
                                item.category == 'Diet'?
                                item.dietName:
                                item.extraName
                              })}
                            />
                  :
                  <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>No Tasks</Text>
                  </View>
                }
                keyExtractor={(item, index)=>`task-${index}`}
                ItemSeparatorComponent={()=>
                  <View style={{
                    height:1,
                    backgroundColor:Colors.lightDark,
                    width:'85%',
                    alignSelf:'center',
                    marginVertical:15
                  }} />
                }
                ListFooterComponent={<View/>}
                ListFooterComponentStyle={{height:200}}
            />
        :
        <ActivityIndicator />
      }

      {/* add schedule button */}
      <View style={styles.addButton}>
        <TouchableOpacity onPress={()=> navigation.navigate('Add Schedule', {DayName: day})}>
          <Image
            style={{backgroundColor: 'white', height: 60, width: 60}}
            source={require('../../../images/plus.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position:'relative'
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    position: 'absolute',
    right: 10,
    bottom:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer:{
    height:'100%', 
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  emptyText:{
    color:Colors.selectedColor, 
    fontSize:20, 
    fontWeight:'bold'
  }
});
