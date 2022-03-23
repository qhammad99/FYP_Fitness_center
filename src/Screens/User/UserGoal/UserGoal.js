import React, {useState, useContext} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import { AuthContext } from '../../../Context/Providers/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';
import Strings from '../../../strings/Strings';
import HeadingAndCaption from '../../../components/HeadingAndCaption';
import styles from './styles';
import Colors from '../../../colors/Colors';

const UserGoal = props =>{
    const authentication = useContext(AuthContext);
    console.log(authentication);
    const [selectedValue, setSelectedValue] = useState("1");

    const updateGoal = async()=>{
        let userObj;
        try{
          userObj= await AsyncStorage.getItem('USER');
        }catch(e){
          console.log("error in reading local storage: ", e);
        }
        userObj = JSON.parse(userObj)
        userObj = {...userObj, isGoal: 1}
        userObj = JSON.stringify(userObj);
        try{
            await AsyncStorage.setItem('USER', userObj);
          }catch(e){
            console.log("error in writing local storage: ", e);
          }
    
        authentication.dispatch({type:'ADD_LOCAL_DATA', payload:userObj});
    }

    const nextPressed = () =>{
        updateGoal();
      }

    
    return(
        <>
            <View style={styles.container}>
                {/* heading and caption from component */}
                <HeadingAndCaption
                    headingText={Strings.GoalHeading}
                    captionText={Strings.GoalCaptionIncrease}
                />

                {/* target */}
                <Text style={{color:'#000', marginTop:20, width:'100%', textAlign:'center'}}>{Strings.GoalTargetCaption}</Text>
                <View style={styles.inputFieldsContainer}>
                <Text style={{fontWeight:'bold', marginTop:10, color: Colors.darkColor}}>Weight:   </Text>
                {/* picker for duration */}
                <Picker
                    selectedValue={selectedValue}
                    style={{width: 130, backgroundColor:'#fff', color:Colors.selectedColor }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    dropdownIconColor={Colors.selectedColor}
                >
                    <Picker.Item label="kg" value='1'/>  
                    <Picker.Item label="lbs" value='2'/>
     
                </Picker>
                <TextInput placeholder='value' placeholderTextColor={'#000'} style={{marginLeft:20, flex:1,borderBottomColor:Colors.primary, borderBottomWidth:1}}/>
                </View>

                <View style={{height:0.5, width:'70%', alignSelf:'center', marginVertical:30, backgroundColor:Colors.lightDark}}/>

                {/* duration */}
                <Text style={{color:'#000', marginTop:20, width:'100%', textAlign:'center'}}>{Strings.GoalDurationCaption}</Text>
                <View style={styles.inputFieldsContainer}>
                <Text style={{fontWeight:'bold', marginTop:10, color: Colors.darkColor}}>Duration:   </Text>
                {/* picker for duration */}
                <Picker
                    selectedValue={selectedValue}
                    style={{width: 130, backgroundColor:'#fff', color:Colors.selectedColor }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    dropdownIconColor={Colors.selectedColor}
                >
                    <Picker.Item label="days" value='1'/>  
                    <Picker.Item label="weeks" value='2'/>
                    <Picker.Item label="months" value='3'/>
     
                </Picker>
                <TextInput placeholder='value' placeholderTextColor={'#000'} style={{marginLeft:20, flex:1,borderBottomColor:Colors.primary, borderBottomWidth:1}}/>
                </View>
                
                {/* next button */}
                <TouchableOpacity style={styles.nextButton} onPress={nextPressed}>
                        <Text style={styles.nextButtonText}>
                            {Strings.nextText}
                        </Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default UserGoal;