import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

export default function TasksComponent({TaskText}) {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>

        <TouchableOpacity style={styles.taskView} onPress={() => navigation.navigate('Task Details', {TaskName: TaskText
        })}>
              <Text style={{color: 'black'}}>{TaskText}</Text>
              <TouchableOpacity onPress={()=> Alert.alert("Delete Task", "This will delete task")}>
                    <Image style={{height: 35, width: 35}} source={require('../../images/trash.png')}/>
              </TouchableOpacity>
        </TouchableOpacity>
    </View>
  )
}

const styles= StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    taskView: {
        paddingHorizontal: 10,
        borderWidth: 1,
        width: '100%',
        borderColor: '#E26F1E',
        borderRadius: 10,
        height: 60,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#f2f3f8",
    },
})