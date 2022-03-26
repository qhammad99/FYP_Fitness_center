import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../colors/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DayDateHeader = props =>{
    return(
        <View style={styles.container}>
            <View style={styles.firstRow}>
                {/* left carrot */}
                {
                    props.firstDay == false 
                    ? 
                    <TouchableOpacity>
                        <AntDesign name={'caretleft'} size={20} color={Colors.selectedColor} />
                    </TouchableOpacity>
                    :
                    <View style={{width:20}}></View>
                }
                
                {/* Day number */}
                <TouchableOpacity onPress={props.to}>
                    <Text style={styles.dayNumberText}>Day # {props.dayNumber}</Text>
                </TouchableOpacity>
                
                {/* right carrot */}
                {
                    props.lastDay == false 
                    ? 
                    <TouchableOpacity>
                        <AntDesign name={'caretright'} size={20} color={Colors.selectedColor} />
                    </TouchableOpacity>
                    :
                    <View style={{width:20}}></View>
                }
            </View>

            {/* second row */}
            <View style={styles.secondRow}>
                
                <Text style={styles.label}>
                    Date: <Text style={styles.text}>{props.date}</Text>
                </Text>

                <Text style={styles.label}>
                    Day: <Text style={styles.text}>{props.day}</Text>
                </Text>
            </View>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        width:'100%',
        padding:10
    },
    firstRow:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:30,
        marginTop:5
    },
    dayNumberText:{
        color:Colors.darkColor,
        fontSize:16
    },
    secondRow:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        marginTop:20
    },
    label:{
        fontSize:14,
        color:Colors.darkColor
    },
    text:{
        fontSize:16,
        color: Colors.primary
    },
});
export default DayDateHeader;