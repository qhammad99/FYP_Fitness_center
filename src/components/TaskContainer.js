import React,{useEffect} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Colors from '../colors/Colors';

const TaskContainer = props =>{
    useEffect(()=>{
        console.log("hello world");
    },[]);
    const item = props.item;
    const index = props.index;
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={props.to}>
            <Text style={styles.taskNumber}>
                Task # {index+1} 
            </Text>

            <View style={styles.cardContainer}>
                <View style={styles.cardLeft}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={props.taskImage} />
                    </View>
                    <View style={styles.taskContainer}>
                        <Text style={{color:Colors.darkColor, fontWeight:'bold'}}>
                            {     
                                item.category == 'Workout'?
                                item.workoutName:
                                item.category == 'Diet'?
                                item.dietName:
                                item.extraName
                            }
                        </Text>
                        <Text style={{color:Colors.darkColor}}>
                            {
                                `${item.start_time} - ${item.finish_time}`
                            }
                        </Text>
                    </View>
                </View>
                <View style={styles.cardRight}>
                {
                    props.dayNumber == props.currentDayNumber
                    && //also check time if fnish time is over then disable the ok button
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
                            }}>
                            <Text style={{color:Colors.lightColor}}>Done</Text>
                    </TouchableOpacity>
                    </>
                }
                </View>
            </View>
            </TouchableOpacity>
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