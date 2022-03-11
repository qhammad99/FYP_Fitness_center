import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Colors from '../colors/Colors';

const TaskContainer = props =>{
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={props.to}>
            <Text style={styles.taskNumber}>{props.taskNumber}</Text>

            <View style={styles.cardContainer}>
                <View style={styles.cardLeft}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={props.taskImage} />
                    </View>
                    <View style={styles.taskContainer}>
                        <Text style={{color:Colors.darkColor, fontWeight:'bold'}}>{props.taskTitle}</Text>
                        <Text style={{color:Colors.darkColor}}>{props.taskTime}</Text>
                    </View>
                </View>
                <View style={styles.cardRight}>
                    <Text style={{color:Colors.darkColor}}>isDone ceckBox</Text>
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