import React, {useState, useContext, useEffect} from 'react';
import {View, TouchableOpacity, Text, TextInput, ActivityIndicator} from 'react-native';
import { AuthContext } from '../../../Context/Providers/AuthProvider';
import {ParametersContext} from '../../../Context/Providers/ParametersProvider';
import addGoal from '../../../Context/Actions/addGoal';
import getParameters from '../../../Context/Actions/getParameters';
import {Picker} from '@react-native-picker/picker';
import Strings from '../../../strings/Strings';
import styles from './styles';
import Colors from '../../../colors/Colors';
import Modal from 'react-native-modal';

const UserGoal = props =>{
    const authentication = useContext(AuthContext);
    const Parameters = useContext(ParametersContext);
    const [selectedValue, setSelectedValue] = useState("1");
    const [weight, setWeight] = useState(null);
    const [time, setTime] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [bmiResult, setBmiResult] = useState('');
    const BMI = (height, weight) => {
        var result = (parseFloat(weight) * 10000) / (parseFloat(height) * parseFloat(height));
        result.toFixed(2);

        if (result < 18.5) {
            setBmiResult('Underweight');
        } else if (result >= 18.5 && result < 25) {
            setBmiResult('Normal weight');
        } else if (result >= 25 && result < 30) {
            setBmiResult('Overweight');
        } else if (result >= 30) {
            setBmiResult('Obese');
        } else {
        // alert('Incorrect Input!');
        setBmiResult('');
        }
  };

    useEffect(
        ()=>{
            if(Parameters.parameters.height == null)
                getParameters(Parameters)(authentication);
            else
                setIsLoading(false);
            BMI(Parameters.parameters.height, Parameters.parameters.weight);
        },[Parameters]
    );

    const nextPressed = () =>{
        let numberOFDays;
        if(time == null || time.length == 0){
                alert("Empty time not allowed")
            }
        
        if(selectedValue ==1)
            numberOFDays = time;
        else if(selectedValue == 2)
            numberOFDays = time*7;
        else if(selectedValue == 3)
            numberOFDays = time*30;
        
        const MONTH ={ 
            "Jan": 1, "Feb": 2, "Mar": 3, "Apr": 4, "May": 5, "Jun": 6, 
            "Jul": 7, "Aug": 8, "Sep": 9, "Oct": 10, "Nov": 11, "Dec": 12
        };
        const todayPK = new Date().toString(); // convert to local time but sending string
        const currentMonth = ('0' + MONTH[todayPK.substring(4, 7)]).slice(-2);  // add 0 at start if less than 10
        const currentDate = ('0' + todayPK.substring(8, 10)).slice(-2);
        const currentYear = todayPK.substring(11, 15);
        const todayDate = currentYear + "-" + currentMonth + "-" + currentDate;

        if (numberOFDays <3 || numberOFDays > 180)
            alert("minimum 3 days and maximum 180 days or  25 weeks or 6 months allowed");
        else if(bmiResult == 'Normal weight'){
            addGoal(todayDate, numberOFDays, bmiResult, 0)(Parameters)(authentication);
        }else if(bmiResult == 'Overweight' || bmiResult == 'Obese' || bmiResult == 'Underweight'){
                if(weight == null || weight.length ==0){
                    alert("empty weight not allowed");
                }
            // change the logic here make different 'levels or grades' for different weight loose or gain per day
            const weightInGrams = weight * 1000;
            if(weightInGrams/numberOFDays > 200){
                alert("You can't achieve that goal in that duration, max 200g gain or loose per day");
            }
            else
                addGoal(todayDate, numberOFDays, bmiResult, weight)(Parameters)(authentication);
        }else
            alert("something wrong in values");
      }

    
    return(
        <>
            <View style={styles.container}>
            <Modal
                isVisible={isLoading}
                animationIn={'bounceInUp'}
                animationOut={'bounceOutDown'}
                style={{margin:0}}>
                    <View style={{
                        width:'100%', 
                        height: '100%', 
                        alignItems:'center',
                        justifyContent:'center'
                        }}
                    >
                        <ActivityIndicator size={50} color={Colors.primary}/>
                    </View>
                </Modal>
                {/*Heading*/}
                <Text style={styles.headingText}>
                    {Strings.GoalHeading}
                </Text>
                
                {/* subHeading */}
                <Text style={styles.captionText}>
                    You are <Text style={styles.bmiResult}>{bmiResult}!</Text>
                </Text>

                {/*caption */}
                <Text style={styles.captionText}>
                    {
                        bmiResult == 'Underweight'?
                            Strings.GoalCaptionIncrease :
                        bmiResult == 'Overweight'?
                            Strings.GoalCaptionDecrease :
                        bmiResult == 'Normal weight'?
                            Strings.GoalCaptionMaintain :
                            Strings.GoalCaptionObese  
                    }
                </Text>

                {/* target */}
                {bmiResult != 'Normal weight' &&(
                    <>
                <Text style={styles.containerHeading}>{Strings.GoalTargetCaption}</Text>
                <View style={styles.inputFieldsContainer}>
                    <Text style={styles.containerLabel}>Weight:</Text>
                    <TextInput 
                        placeholder='value' 
                        placeholderTextColor={Colors.lightDark}
                        defaultValue = {weight}
                        onChangeText = {(text)=>setWeight(text)} 
                        style={styles.inputValueField}
                        keyboardType='numeric'
                        maxLength={2} 
                        />
                    <View style={styles.unitContainer}>
                        <Text style={styles.unit}>kg</Text>
                    </View>
                </View>

                <View style={{height:0.5, width:'70%', alignSelf:'center', marginTop:40, marginBottom:10, backgroundColor:Colors.lightDark}}/>
                </>)
                }
                
                {/* duration */}
                <Text style={styles.containerHeading}>{Strings.GoalDurationCaption}</Text>
                    <View style={styles.inputFieldsContainer}>
                    <Text style={styles.containerLabel}>Duration:</Text>
                    
                    <TextInput 
                        placeholder='value' 
                        placeholderTextColor={Colors.lightDark} 
                        style={styles.inputValueField}
                        defaultValue={time}
                        onChangeText ={(text)=>setTime(text)}
                        keyboardType='numeric'
                        maxLength={3}
                        />
                    {/* picker for duration */}
                    <Picker
                        selectedValue={selectedValue}
                        style={[styles.unitContainer, {color:Colors.selectedColor }]}
                        onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        dropdownIconColor={Colors.selectedColor}
                    >
                        <Picker.Item label="days" value='1'/>  
                        <Picker.Item label="weeks" value='2'/>
                        <Picker.Item label="months" value='3'/>
        
                    </Picker>
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