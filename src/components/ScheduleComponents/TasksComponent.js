import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Colors from '../../colors/Colors';

export default function TasksComponent(props) {
  const item = props.item;
  return (
    <View style={styles.root}>
    <ScrollView 
        contentContainerStyle={styles.container} 
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        horizontal
    >
        <TouchableOpacity style={styles.cardLeft} onPress={props.to}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={props.taskImage} />
            </View>
            <View style={styles.taskContainer}>
                <View>
                    <View style={{
                        backgroundColor: (
                            item.category == 'Workout' ||
                            item.category == 'extra_workout')
                            ?
                            "rgba(59, 152, 173, 0.15)"
                            :
                            "rgba(59, 166, 45, 0.15)",

                        borderWidth: 1,
                        borderRadius: 5,

                        borderColor: (
                            item.category == 'Workout' ||
                            item.category == 'extra_workout')
                            ?
                            "rgba(59, 152, 173, 1)"
                            :
                            "rgba(59, 166, 45, 1)",

                        alignSelf: 'flex-start',
                        paddingHorizontal: 3

                    }}>
                        <Text style={{
                            color: (
                                item.category == 'Workout' ||
                                item.category == 'extra_workout')
                                ?
                                "rgba(59, 152, 173, 1)"
                                :
                                "rgba(59, 166, 45, 1)",
                            fontSize: 9
                        }}>
                            {
                                item.category == 'Workout' ?
                                    "Workout" :
                                    item.category == 'Diet' ?
                                        "Diet" :
                                        item.category
                            }
                        </Text>
                    </View>
                    <Text style={{ color: Colors.darkColor, fontWeight: 'bold' }}>
                        {
                            item.category == 'Workout' ?
                                item.workoutName :
                                item.category == 'Diet' ?
                                    item.dietName :
                                    item.extraName
                        }
                    </Text>
                </View>
                <Text style={{ color: Colors.darkColor }}>
                    {(item.category == 'Workout' || item.category == 'Diet') ?
                        `${item.start_time} - ${item.finish_time}` :
                        `${item.start_time}`
                    }
                </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardRight} onPress={()=> props.deleteSchedule(item.schedule_id)}>
            <Image style={{height: 30, width: 30}} source={require('../../images/trash.png')}/>
        </TouchableOpacity>
    </ScrollView>
    </View>
  )
}

const styles= StyleSheet.create({
    root:{
        width:'100%',
        overflow:'hidden'
    },
    container: {
        display: 'flex',
        flexDirection:'row',
        width:'110%'
    },
    cardLeft:{
        flexBasis:'100%',
        maxWidth:'100%',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10
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
    },
    cardRight:{
        flexBasis:'10%',
        maxWidth:'10%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    }
})