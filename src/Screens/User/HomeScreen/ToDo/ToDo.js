// This screen will show details of tasks to do on the day
import React, {useEffect, useState, useContext} from 'react';
// import NetInfo from "@react-native-community/netinfo";
import Modal from 'react-native-modal';
import DayDateHeader from '../../../../components/DayDateHeader';
import TaskContainer from '../../../../components/TaskContainer';
import Colors from '../../../../colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../../../../Context/Providers/AuthProvider';
import {GoalContext} from '../../../../Context/Providers/GoalProvider';
import { TaskContext } from '../../../../Context/Providers/TaskProvider';
import currentGoal from '../../../../Context/Actions/currentGoal';
import scheduleToday from '../../../../Context/Actions/scheduleToday';
import scheduleByDay from '../../../../Context/Actions/scheduleByDay';
import progressTasks from '../../../../Context/Actions/progressTasks';
import { useIsFocused } from '@react-navigation/native';

import moment from 'moment';
import {
    Text, 
    View, 
    StyleSheet, 
    TouchableOpacity, 
    ActivityIndicator,
    FlatList
} from 'react-native';

const ToDo = props =>{
    const authentication = useContext(AuthContext);
    const Goal = useContext(GoalContext);
    const Task = useContext(TaskContext);

    const[isLoading, setIsLoading] =useState(true);
    const [completed, setCompleted] = useState(false); // if goal completed
    // const [isConnected, setIsConnected] = useState(true);

    // header data
    const [dayNumber, setDayNumber] = useState(0);
    const [currentDayNumber, setCurrentDayNumber] = useState(0);
    const [date, setDate] = useState(moment().format('MMMM DD, YYYY'));
    const [day, setDay] = useState(moment().format('dddd'));
    const [firstDay, setFirstDay] = useState(false);
    const [lastDay, setLastDay] =useState(false);

    const focused = useIsFocused();

    useEffect(()=>{
        if(props.route.params){
            if(props.route.params.dayDate){
                const newDate = moment(props.route.params.dayDate, 'YYYY-MM-DD').local();
                setDate(moment(newDate).format('MMMM DD, YYYY'));
                setDay(moment(newDate).format('dddd'));
            }
        }
    }, [props.route.params]);

    useEffect(()=>{
        if(isLoading)
            setIsLoading(false);
    },[Task]);

    useEffect(()=>{
        // NetInfo.fetch().then(state => {
        //     if(state.isConnected){
            if(focused){ //because focuse set to false when hide
                if(isLoading == false)
                    setIsLoading(true);

                if(Object.keys(Goal.goal.data) == 0){
                    currentGoal(Goal)(authentication);
                }

                if(Object.keys(Goal.goal.data) != 0){
                    if(!completed)
                        settingCurrentDayNumber(); //today day number
                    settingDayNumber(); // if user shift then display that number
                
                    if(dayNumber != 0 && currentDayNumber != 0){
                        if(dayNumber == currentDayNumber){
                            // if daynumber = curent day number then today schedule
                            scheduleToday(Goal)(Task)(authentication);
                        }else if(dayNumber < currentDayNumber){
                            // set task from progress
                            progressTasks(Goal)(dayNumber)(Task)(authentication);
                        }else if(dayNumber > currentDayNumber){
                            // set schedule by day in task
                            let forDay = moment(day, 'dddd').local().day() +1;
                            scheduleByDay(forDay)(Task)(authentication);
                        }
                    }
                    
                }
            }
        //     }else{
        //         setIsConnected(false);
        //     }
        //   });
    },[Goal, date, day, dayNumber, currentDayNumber, focused]);
    
    const settingCurrentDayNumber = () =>{
        let nowDate = moment().local();
        let goalStartDate = moment(Goal.goal.data.start_date).local();
        let dayNumber = nowDate.diff(goalStartDate, 'days')+1;
        setCurrentDayNumber(dayNumber);
    }

    const settingDayNumber = () =>{
        let forDate = moment(date, 'MMMM DD, YYYY');
        const forDateLocal = moment(forDate).local();
        const goalStartDateLocal = moment(Goal.goal.data.start_date).local();

        const dayNumber = forDateLocal.diff(goalStartDateLocal, 'days')+1;
        setDayNumber(dayNumber);

        const lastDayNumber = Goal.goal.data.number_of_days;
        if(dayNumber == 1){
            setFirstDay(true);
        }else if(dayNumber == lastDayNumber){
            setLastDay(true);
        }else{
            setFirstDay(false);
            setLastDay(false);
        }

        if(dayNumber>lastDayNumber){
            setCompleted(true);
        }
    }

    // const checkInternetConnection =()=>{
    //     NetInfo.fetch().then(state => {
    //         if(state.isConnected)
    //             setIsConnected(true);
    //     })
    // }

    const shift = () =>{
        // clear the progress so calendar component loads latest code
        if(Task.tasks.progress != null)
            Task.setTasks({type:"RESET_PROGRESS"})
        props.navigation.navigate('DayList');
    }

    const shiftDetail=(image, item)=>{
        props.navigation.navigate('ItemDetailShow', {image: image, item: item});
    }

    const nextPressed =()=>{
        const nextDay = moment(date, 'MMMM DD, YYYY').local().add(1, 'day');
        setDate(moment(nextDay).format('MMMM DD, YYYY'));
        setDay(moment(nextDay).format('dddd'));
    }

    const backPressed =()=>{
        const prevDay = moment(date, 'MMMM DD, YYYY').local().subtract(1, 'day');
        setDate(moment(prevDay).format('MMMM DD, YYYY'));
        setDay(moment(prevDay).format('dddd'));
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
            {/* loading modal */}
            <Modal
                isVisible={isLoading}
                animationIn={'bounceInUp'}
                animationOut={'bounceOutDown'}
                style={{margin:0}}>
                    <View style={{
                        width:'100%', 
                        height: '100%', 
                        alignItems:'center',
                        justifyContent:'center'
                        }}
                    >
                        <ActivityIndicator size={50} color={Colors.primary}/>
                    </View>
                </Modal>

                {/* no internet modal */}
            {/* <Modal
                isVisible={!isConnected}
                style={{margin:0}}>
                    <View style={{
                        width:'100%', 
                        height: '100%', 
                        backgroundColor:Colors.lightColor,
                        alignItems:'center',
                        justifyContent:'center'
                        }}
                    >
                        <MaterialCommunityIcons name={'close-network-outline'} size={70} color={Colors.selectedColor}/>

                        <Text style={{color:Colors.darkColor, marginTop:20, fontSize:14}}>Ooops! failed to connect to internet</Text>
                        
                        <TouchableOpacity style={{backgroundColor:Colors.primary, borderRadius:3, padding:6, marginTop:10}} onPress={checkInternetConnection}>
                            <Text style={{color: Colors.lightColor}}>Try Again</Text>
                        </TouchableOpacity>
                    </View>
                </Modal> */}

        <DayDateHeader  
            to= {shift}
            dayNumber= {dayNumber} 
            date= {date} 
            day= {day}
            firstDay= {firstDay}
            lastDay= {lastDay}
            next= {nextPressed}
            back= {backPressed}
            />
        
        {/* horizontal line */}
        <View style={styles.horizontalLine} />

        <View style={{width:'100%', flex:1}}>
            <FlatList 
                data={Task.tasks.tasks}
                renderItem={
                    ({item, index})=>
                        <TaskContainer 
                            item= {item}
                            index= {index}
                            dayNumber= {dayNumber}
                            currentDayNumber= {currentDayNumber}
                            // when we get image from database we get url, but for now
                            // we using local image so will use this
                            taskImage={
                                item.category == 'Workout' || item.category == 'extra_workout'?
                                getImage("morning"):
                                getImage("breakfast")
                            }
                            to={shiftDetail}
                            />
                }
                ListFooterComponent={ 
                    // remove this button if present to do screen is not match with current date and day
                    dayNumber == currentDayNumber
                    ?
                    <TouchableOpacity style={styles.extraAddButtonContainer} onPress={()=>props.navigation.navigate('ExtraItem', {dayNumber: dayNumber, goal_id: Goal.goal.data.id})}>
                        <Ionicons name={'add'} size={20} color={'#fff'} />
                        <Text style={styles.extraAddButton}>Extra item</Text>
                    </TouchableOpacity>
                    :
                    <View style={[styles.extraAddButtonContainer, {backgroundColor:'rgba(0,0,0,0)'}]}>
                    </View>
                }
                keyExtractor={(item, index)=>`task-${index}`}
            />
        
        </View>
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
        alignItems:'center',
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