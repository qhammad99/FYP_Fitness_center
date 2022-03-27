// This screen will show details of tasks to do on the day
import React, {useEffect, useState, useContext} from 'react';
import NetInfo from "@react-native-community/netinfo";
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
import moment from 'moment';
import {
    Text, 
    View, 
    StyleSheet, 
    ScrollView, 
    TouchableOpacity, 
    ActivityIndicator,
    FlatList
} from 'react-native';
import { keyExtractor } from 'react-native/Libraries/Lists/VirtualizeUtils';


const ToDo = props =>{
    const authentication = useContext(AuthContext);
    const Goal = useContext(GoalContext);
    const Task = useContext(TaskContext);

    const[isLoading, setIsLoading] =useState(true);
    const [completed, setCompleted] = useState(false); // if goal completed
    const [goalData, setGoalData] = useState({});
    const [isConnected, setIsConnected] = useState(true);

    // header data
    const [dayNumber, setDayNumber] = useState(0);
    const [currentDayNumber, setCurrentDayNumber] = useState(0);
    const [date, setDate] = useState(moment().format('MMMM DD, YYYY'));
    const [day, setDay] = useState(moment().format('dddd'));
    const [firstDay, setFirstDay] = useState(false);
    const [lastDay, setLastDay] =useState(false);

    // tasks and progress
    const [tasks, setTasks] = useState([]);

    const checkInternetConnection = () =>{
        NetInfo.fetch().then(state => {
            setIsConnected(state.isConnected);
          });
    }

    const settingCurrentDayNumber = () =>{
        let nowDate = moment().local();
        let goalStartDate = moment(goalData.start_date).local();
        let dayNumber = nowDate.diff(goalStartDate, 'days')+1;
        setCurrentDayNumber(dayNumber);
    }

    const settingDayNumber = () =>{
        let forDate = moment(date, 'MMMM DD, YYYY');
        const forDateLocal = moment(forDate).local();
        const goalStartDateLocal = moment(goalData.start_date).local();

        const dayNumber = forDateLocal.diff(goalStartDateLocal, 'days')+1;
        setDayNumber(dayNumber);

        const lastDayNumber = goalData.number_of_days;

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

        setIsLoading(false);
    }

    const settingTasks = async() =>{
        scheduleToday(Goal)(Task)(authentication);
        setTasks(Task.tasks.tasks);
    }

    useEffect(()=>{
        checkInternetConnection();
        if(isConnected){
            setIsLoading(true);

            if(Object.keys(goalData) == 0){
                currentGoal(Goal)(authentication);
            }
            if(Object.keys(Goal.goal.data) != 0)
                setGoalData(Goal.goal.data);
            
            if(Object.keys(goalData) != 0){
                if(currentDayNumber == 0 && !completed)
                    settingCurrentDayNumber(); //today day number
                settingDayNumber(); // if user shift then display that number

                if(dayNumber == currentDayNumber){
                    // if daynumber = curent day number then today schedule
                    settingTasks();
                }

                setIsLoading(false);
            }
        }
    },[Goal, goalData, day]);
    
    const shift = () =>{
        props.navigation.navigate('DayList');
    }

    const shiftDetail=()=>{
        props.navigation.navigate('ItemDetailShow');
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

                {/* no internet modal */}
            <Modal
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
                </Modal>

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
        <View style={{width:'100%'}}>

            <FlatList 
                data={tasks}
                renderItem={
                    ({item, index})=>
                        <TaskContainer 
                            taskNumber= {`Task # ${index+1}`} 
                            taskImage={
                                item.category == 'Workout'?
                                getImage("evening"):
                                getImage("breakfast")
                            } 
                            taskTitle={
                                item.category == 'Workout'?
                                item.workoutName:
                                item.category == 'Diet'?
                                item.dietName:
                                item.extraName
                            } 
                            taskTime={
                                `${item.start_time} - ${item.finish_time}`
                            }
                            to={shiftDetail}
                            />
                }
                keyExtractor={(item, index)=>`task-${index}`}
            />

            {/* remove this button if present to do screen is not match with current date and day */}
            { dayNumber == currentDayNumber
                &&
                <TouchableOpacity style={styles.extraAddButtonContainer}>
                    <Ionicons name={'add'} size={20} color={'#fff'} />
                    <Text style={styles.extraAddButton}>Extra item</Text>
                </TouchableOpacity>
            }
        
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