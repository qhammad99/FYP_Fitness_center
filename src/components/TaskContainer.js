import React, {useContext} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import * as Animatable from 'react-native-animatable';
import Colors from '../colors/Colors';
import moment from 'moment';
import workoutProgress from '../Context/Actions/workoutProgress';
import dietProgress from '../Context/Actions/dietProgress';
import { AuthContext } from '../Context/Providers/AuthProvider';
import { GoalContext } from '../Context/Providers/GoalProvider';

const TaskContainer = props =>{
    const item = props.item;
    const index = props.index;
    
    const authentication = useContext(AuthContext);
    const Goal = useContext(GoalContext);

    const attachWotkoutProgress = () =>{
        workoutProgress(item)(props.dayNumber)(Goal)(authentication);
    }

    const attachDietProgress = () =>{
        dietProgress(item)(props.dayNumber)(Goal)(authentication);
    }

    const addPressed = ()=>{
        if(item.schedule_id != 'Extra' && item.schedule_id != 'Done'){
            if(item.category == 'Diet'){
                attachDietProgress();
            }else if(item.category == 'Workout'){
                attachWotkoutProgress();
            }
        }
    }
    return(
        <View style={styles.container}>
            {
                (!item.empty) ?
                <>
            <TouchableOpacity onPress={()=>props.to(props.taskImage, item)}>
            <Text style={styles.taskNumber}>
                Task # {index+1} 
            </Text>

            <View style={styles.cardContainer}>
                <View style={styles.cardLeft}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={props.taskImage} />
                    </View>
                    <View style={styles.taskContainer}>
                        <View>
                            <View style={{
                                backgroundColor:(
                                    item.category == 'Workout' || 
                                    item.category == 'extra_workout')
                                    ?
                                    "rgba(59, 152, 173, 0.15)"
                                    :
                                    "rgba(59, 166, 45, 0.15)",

                                borderWidth:1,
                                borderRadius:5,

                                borderColor:(
                                    item.category == 'Workout' || 
                                    item.category == 'extra_workout')
                                    ?
                                    "rgba(59, 152, 173, 1)"
                                    :
                                    "rgba(59, 166, 45, 1)",  
                                
                                alignSelf:'flex-start',
                                paddingHorizontal:3

                            }}>
                                <Text style={{
                                    color:(
                                        item.category == 'Workout' || 
                                        item.category == 'extra_workout')
                                        ?
                                        "rgba(59, 152, 173, 1)"
                                        :
                                        "rgba(59, 166, 45, 1)",
                                    fontSize:9
                                    }}>
                                    {     
                                        item.category == 'Workout'?
                                        "Workout":
                                        item.category == 'Diet'?
                                        "Diet":
                                        item.category
                                    }
                                </Text>
                        </View>
                        <Text style={{color:Colors.darkColor, fontWeight:'bold'}}>
                            {     
                                item.category == 'Workout'?
                                item.workoutName:
                                item.category == 'Diet'?
                                item.dietName:
                                item.extraName
                            }
                        </Text>
                        </View>
                        <Text style={{color:Colors.darkColor}}>
                            { item.schedule_id != 'Extra'?
                                `${item.start_time} - ${item.finish_time}`:
                                ""
                            }
                        </Text>
                    </View>
                </View>
                <View style={styles.cardRight}>
                {
                    props.dayNumber == props.currentDayNumber
                    && //also check time if fnish time is over then disable the ok button
                    (
                        // yae progress sy aya
                        (item.schedule_id == 'Extra' || item.schedule_id == 'Done')
                        ?
                            <>
                            <View style={{marginRight:5}}>
                                <Entypo name={"check"} size={20} color={'#259b24'}/>
                            </View>
                            </>
                        :
                        moment().local().isBetween(moment(item.start_time, "hh:mm:ss"), moment(item.finish_time, "hh:mm:ss"))
                        ?
                        <>
                        <Animatable.Text 
                            animation="pulse" 
                            easing="ease-out" 
                            iterationCount="infinite"
                            delay={300}
                            style={{
                                color:'#259b24', 
                                marginTop:-5,  
                                fontSize:12, 
                                textAlign:'right',
                                marginRight:10,
                                marginBottom:6,
                                fontWeight:'bold'
                                }}
                        >
                            Live
                        </Animatable.Text>
                        

                        <TouchableOpacity 
                            style={{
                                borderRadius:5,
                                paddingHorizontal:7,
                                paddingVertical:3,
                                backgroundColor:Colors.primary, 
                                alignItems:'center',
                                justifyContent:'center'
                                }}
                            onPress={addPressed}>
                                <Text style={{color:Colors.lightColor}}>Done</Text>
                        </TouchableOpacity>
                        </>
                        :
                        moment().local().isAfter(moment(item.finish_time, "hh:mm:ss")) // time khtm ho gia hy
                        ?(
                            <View style={{marginRight:5}}>
                                <Entypo name={"cross"} size={20} color={'#FF0000'}/>
                            </View>
                        )
                        :
                        //abi is ka time nai aya
                        <></>
                    )
                }
                </View>
            </View>
            </TouchableOpacity>
            </>:(
                props.dayNumber >= props.currentDayNumber
                ?
                <View style={{
                    height:'100%', 
                    width:'100%',
                    paddingVertical:20,
                    paddingHorizontal:5, 
                    alignItems:'center',
                    justifyContent:'center'
                    }}>
                    <Image style={{width: 150, height: 150}} source={require('../images/restDay.png')} />
                    <Text style={{color:Colors.selectedColor, fontSize:20, fontWeight:'bold'}}>
                        Rest Day
                    </Text>
                </View>
                :
                <View style={{
                    height:'100%', 
                    width:'100%',
                    paddingVertical:20,
                    paddingHorizontal:5, 
                    alignItems:'center',
                    justifyContent:'center'
                    }}>
                    <Image style={{width: 180, height: 150}} source={require('../images/noProgress.png')} />
                    <Text style={{color:Colors.selectedColor, fontSize:20, fontWeight:'bold'}}>
                        No Progress
                    </Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        width:'100%',
        paddingHorizontal:10,
        paddingVertical:5
    },
    taskNumber:{
        color:Colors.darkColor,
        fontSize:12, 
        fontWeight:'bold'
    },
    cardContainer:{
        width:'100%',
        backgroundColor:'white',
        borderWidth:1,
        borderRadius:5,
        borderColor:Colors.primary,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:5
    },
    cardLeft:{
        flexDirection:'row',
        alignItems:'center'
    },
    imageContainer:{
    },
    image:{
        width:50,
        height:50,
        borderRadius:50,
        borderWidth:0.2,
        borderColor:Colors.primary
    },
    taskContainer:{
        marginLeft:10
    }
});

export default TaskContainer;