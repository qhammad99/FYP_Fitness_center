import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function TaskDetails({route}) {
    const {TaskName} = route.params;
  return (
    <View style={styles.container}>
        <View style={styles.imageView}>
            <Image style={{borderWidth: 1, borderColor: '#E26F1E', borderRadius: 10}} source={require('../../../images/photo.png')}/>
        </View>

        <View style={styles.textView}>
        <Text style={{color: '#E26F1E', fontSize: 20, fontWeight: 'bold'}}>{TaskName}</Text>
        </View>

        <View style={styles.detailsView}>
            <Text style={{color: 'black'}}>Task category: "category comes here"</Text>
        </View>

        <View style={styles.detailsView}>
             <Text style={{color: 'black'}}>Other details come here</Text>
        </View>
        
      
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    imageView: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    textView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    detailsView: {
        backgroundColor: '#f2f3f8',
        height: 50,
        width: 350,
        borderRadius: 10,
        borderWidth: 1,
        marginStart: 30,
        borderColor: '#E26F1E',
        marginTop: 20,
        alignItems: 'center',
        paddingStart: 10,
        justifyContent: 'center'
    }
})
