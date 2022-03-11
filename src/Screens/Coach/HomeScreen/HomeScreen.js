import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const HomeScreen = () => {
    return(
        <View style={{alignItems:'center'}}>
            <Text>Coach Home</Text>
            <TouchableOpacity style={[styles.menuButton, {backgroundColor:"#07DAE6"}]} >
                    <Text style={styles.menuButtonText}> 
                        Diet 
                    </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.menuButton, {backgroundColor:"#38D6A4"}]} >
                    <Text style={styles.menuButtonText}> 
                        Workout 
                    </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.menuButton, {backgroundColor:"#9228FA"}]} >
                    <Text style={styles.menuButtonText}> 
                        To Do Tasks 
                    </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.menuButton, {backgroundColor:"#FEEC08"}]} >
                    <Text style={styles.menuButtonText}> 
                        User Profile 
                    </Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;