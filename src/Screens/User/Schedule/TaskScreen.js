import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import CustomSwitch from '../../../components/ScheduleComponents/CustomSwitch';
import Tasks from './Tasks';


export default function TaskScreen() {
    
    const [taskTab, setMealTab] = useState(1);
    const onSelectSwitch = value => {
        setMealTab(value);
      };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Scheduled Tasks</Text>
      </View>
      <View style={{paddingHorizontal: 10, marginTop: 10}}>
        <CustomSwitch
          selectionMode={1}
          option1="S"
          option2="S"
          option3="M"
          option4="T"
          option5="W"
          option6="T"
          option7="F"
          onSelectSwitch={onSelectSwitch}
        />
      </View>
      {taskTab == 1 && <Tasks text= "Saturday" />}
      {taskTab == 2 && <Tasks text="Sunday"/>}
      {taskTab == 3 && <Tasks text="Monday"/>}
      {taskTab == 4 && <Tasks text="Tuesday"/>}
      {taskTab == 5 && <Tasks text="Wednesday"/>}
      {taskTab == 6 && <Tasks text="Thursday"/>}
      {taskTab == 7 && <Tasks text="Friday"/>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  headerText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
