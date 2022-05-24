import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import TasksComponent from '../../../components/ScheduleComponents/TasksComponent';
import {useNavigation} from '@react-navigation/native';

export default function Tasks({text}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <View style={styles.dayTextView}>
        <Text style={{color: '#E26F1E', fontWeight: 'bold' }}>{text}'s Tasks</Text>
        </View>
        <TasksComponent TaskText={"Task 1"}/>
        <TasksComponent TaskText={"Task 2"} />
        <TasksComponent TaskText={"Task 3"} />
    <View style={{alignItems: 'center'}}>
         
    </View>
    
      <View style={styles.addButton}>
        <TouchableOpacity onPress={()=> navigation.navigate('Add New Task', {DayName: text})}>
          <Image
            style={{backgroundColor: 'white', height: 60, width: 60}}
            source={require('../../../images/plus.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E26F1E',
    position: 'absolute',
    top: 600,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayTextView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
}
});
