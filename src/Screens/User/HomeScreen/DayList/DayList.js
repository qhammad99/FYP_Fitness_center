// For display all days in one calendar
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Calendar from '../../../../components/Calendar';

const DayList = props =>{
    return(
        <View style={styles.container}>
            <Calendar shiftDayScreen={()=>props.navigation.navigate('ToDo')}/>
        </View>
    );
};

const styles= StyleSheet.create({
    container:{
        flex:1
    }
});

export default DayList;