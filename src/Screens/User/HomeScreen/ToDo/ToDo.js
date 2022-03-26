// This screen will show details of tasks to do on the day
import React, {useEffect, useState, useContext} from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import DayDateHeader from '../../../../components/DayDateHeader';
import TaskContainer from '../../../../components/TaskContainer';
import Colors from '../../../../colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../../../../Context/Providers/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import currentGoal from '../../../../Context/Actions/currentGoal';
import moment from 'moment';

const ToDo = props =>{
    const authentication = useContext(AuthContext);
    const[isLoading, setIsLoading] =useState(true);
    const [completed, setCompleted] = useState(false);
    const [goalData, setGoalData] = useState({});
    // header data
    const [dayNumber, setDayNumber] = useState(0);
    const [currentDayNumber, setCurrentDayNumber] = useState(0);
    const [date, setDate] = useState(moment().format('MMMM DD, YYYY'));
    const [day, setDay] = useState(moment().format('dddd'));
    const [firstDay, setFirstDay] = useState(false);
    const [lastDay, setLastDay] =useState(false);

    const localStorage = async() =>{
        let goalObj;
        try{
            goalObj= await AsyncStorage.getItem('GOAL');
        }catch(e){
            console.log("error in reading local storage: ", e);
        }
        goalObj= JSON.parse(goalObj);
        setGoalData(goalObj.data);
    }

    const settingCurrentDayNumber = async() =>{
        let nowDate = moment();
        let goalStartDate = moment(goalData.start_date).local();

        let dayNumber = nowDate.diff(goalStartDate, 'days')+1;
        setCurrentDayNumber(dayNumber);
    }

    const settingDayNumber = async() =>{
        let forDate = moment(date, 'MMMM DD, YYYY');
        const forDateLocal = moment(forDate).local();
        const goalStartDateLocal = moment(goalData.start_date).local();

        const dayNumber = forDateLocal.diff(goalStartDateLocal, 'days')+1;
        setDayNumber(dayNumber);

        if(dayNumber == 1){
            setFirstDay(true);
        }else{
            setFirstDay(false);
        }
    }

    useEffect(()=>{
        setIsLoading(true);
            currentGoal(authentication);
            localStorage();
            settingCurrentDayNumber(); //today day number
            settingDayNumber(); // if user shift then display that number
        setIsLoading(false);
        // today schedule if current goal
        // otherwise just progress
    },[]);
    
    const shift = () =>{
        props.navigation.navigate('DayList');
    }

    const shiftDetail=()=>{
        props.navigation.navigate('ItemDetailShow');
    }

    const getImage = imageAddress =>{
        switch(imageAddress){
            case "breakfast":
                return require("../../../../images/breakfast.jpg");

            case "morning":
                return require("../../../../images/morningExercise.jpg");

            case "lunch":
                return require("../../../../images/lunch.jpg");

            case "evening":
                return require("../../../../images/eveningExercise.jpg");

            case 'dinner':
                return require("../../../../images/dinner.jpg");

        }
    }

    return (
        <>
        <View style={styles.container}>
            <Modal
                isVisible={isLoading}
                style={{margin:0}}>
                    <View style={{
                        width:'100%', 
                        height: '100%', 
                        backgroundColor:Colors.lightColor,
                        alignItems:'center',
                        justifyContent:'center'
                        }}
                    >
                        <ActivityIndicator size={50} color={Colors.primary}/>
                        <Text style={{color:Colors.darkColor, marginTop:15}}>Loading ...</Text>
                    </View>
                </Modal>

        <DayDateHeader  
            to={shift}
            dayNumber={dayNumber} 
            date={date} 
            day={day}
            firstDay={firstDay}
            lastDay={lastDay}
            />
        
        {/* horizontal line */}
        <View style={styles.horizontalLine} />
        <ScrollView style={{width:'100%'}}>
        <TaskContainer 
            taskNumber="Task # 1" 
            taskImage={getImage("breakfast")} 
            taskTitle="BreakFast" 
            taskTime="9:00 - 10:00"
            to={shiftDetail}
            />

        <TaskContainer 
            taskNumber="Task # 2" 
            taskImage={getImage('morning')}
            taskTitle="Morning Exercise" 
            taskTime="11:00 - 12:00"
            to={shiftDetail}
            />

        <TaskContainer 
            taskNumber="Task # 3"
            taskImage={getImage('lunch')} 
            taskTitle="Lunch" 
            taskTime="13:00 - 14:00"
            to={shiftDetail}
            />

        <TaskContainer 
            taskNumber="Task # 4"
            taskImage={getImage('evening')} 
            taskTitle="Evening Exercise" 
            taskTime="15:00 - 16:00"
            to={shiftDetail}
            />

        <TaskContainer 
            taskNumber="Task # 5"
            taskImage={getImage('dinner')} 
            taskTitle="Dinner" 
            taskTime="17:00 - 18:00"
            to={shiftDetail}
            />

        {/* remove this button if present to do screen is not match with current date and day */}
        <TouchableOpacity style={styles.extraAddButtonContainer}>
            <Ionicons name={'add'} size={20} color={'#fff'} />
            <Text style={styles.extraAddButton}>Extra item</Text>
        </TouchableOpacity>
        
        </ScrollView>
    </View>
    <TouchableOpacity style={styles.editButton}>
        <MaterialCommunityIcons name={'calendar-edit'} color={'#fff'} size={30} />
    </TouchableOpacity>
    </>
    );
};

const styles = StyleSheet.create({
    container:{ 
        flex: 1,  
        alignItems: 'center' ,
        position:'relative'
    },
    horizontalLine:{
        height:1,
        width:'100%',
        backgroundColor:Colors.lightDark,
        marginBottom:10
    },
    extraAddButtonContainer:{
        backgroundColor: Colors.primary,
        alignSelf:'center',
        paddingHorizontal:20,
        paddingVertical:10,
        margin:20,
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center'
    },
    extraAddButton:{
        color:'white',
        fontSize:16,
        fontWeight:'bold' 
    },
    editButton:{
        width:60, 
        height:60, 
        position:'absolute', 
        zIndex:1, 
        backgroundColor:Colors.minorColor, 
        borderRadius:50, 
        right:10, 
        bottom:10, 
        justifyContent:'center', 
        alignItems:'center'

    }
});
export default ToDo;