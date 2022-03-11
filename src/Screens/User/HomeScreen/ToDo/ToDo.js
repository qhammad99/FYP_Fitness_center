// This screen will show details of tasks to do on the day
import React from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import DayDateHeader from '../../../../components/DayDateHeader';
import TaskContainer from '../../../../components/TaskContainer';
import Colors from '../../../../colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ToDo = props =>{
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
                break;
            case "morning":
                return require("../../../../images/morningExercise.jpg");
                break;
            case "lunch":
                return require("../../../../images/lunch.jpg");
                break;
            case "evening":
                return require("../../../../images/eveningExercise.jpg");
                break;
            case 'dinner':
                return require("../../../../images/dinner.jpg");
                break;
        }
    }

    return (
        <>
        <View style={styles.container}>
        <DayDateHeader  to={shift}/>
        
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