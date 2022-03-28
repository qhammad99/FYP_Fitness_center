import React,{useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, Animated} from 'react-native';
import Colors from '../colors/Colors';

const TaskContainer = props =>{
    const [done, setDone] = useState(false)
    const value = new Animated.Value(done ? -16 : 0);
    Animated.timing(value, {
        toValue:done ? 0 : -16,
        duration:1200,
        useNativeDriver: false
    }).start(()=>setDone(!done));

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
                <Text style={{
                    color:'#2b6323', 
                    marginTop:-5,  
                    fontSize:12, 
                    textAlign:'right',
                    }}
                >
                    Live
                </Text>
                <Animated.View 
                    style={{
                        height:1,
                        width:5,
                        marginBottom:5,
                        backgroundColor:'#2b6323',
                        alignSelf:'flex-end',
                        transform:[
                            {translateX:value}
                        ]
                    }}

                />
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