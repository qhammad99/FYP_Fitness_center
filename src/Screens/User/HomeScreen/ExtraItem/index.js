import React, {useState, useContext} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Colors from '../../../../colors/Colors';
import Strings from '../../../../strings/Strings';
import styles from './styles';
import extraProgress from '../../../../Context/Actions/extraProgress';
import {AuthContext} from '../../../../Context/Providers/AuthProvider';
import moment from 'moment';

const ExtraItem = props =>{
    const authentication = useContext(AuthContext);

    const [name, setName] = useState("");
    const [selectedPicker, setSelectedPicker] = useState(1);
    const [calories, setCalories] = useState("");

    const adding = async(obj) =>{
        const result = await extraProgress(obj)(authentication);
        if(result){
            props.navigation.navigate("ToDo");
        }
    }

    const nextPressed = () =>{
        if(name.length == 0 || calories.length== 0){
            alert("empty fields not allowed")
        }else{
            let category;
            if(selectedPicker == 2)
                category="extra_workout"
            else
                category="extra_diet" 

            let obj = {
                name,
                calories,
                category,
                goal_id: props.route.params.goal_id,
                dayNumber: props.route.params.dayNumber,
                start_time: moment().local().format('HH:mm:ss')
            }
            adding(obj);
        }
    }
    
    return(
        <>
        <View style={styles.container}>
            <View style={styles.inputFieldsContainer}>
                <TextInput
                    style={styles.inputField}
                    placeholder={Strings.ExtraTaskName}
                    defaultValue = {name}
                    placeholderTextColor={Colors.lightDark}
                    onChangeText = {text => setName(text)}
                />
            </View>

            <View style={styles.inputFieldsContainer}>
                <Text style={{fontWeight:'bold', marginTop:10, color: Colors.darkColor}}>Category:   </Text>
                {/* picker for category */}
                <Picker
                    selectedValue={selectedPicker}
                    style={{width: 150, backgroundColor:'#fff', color:Colors.selectedColor }}
                    onValueChange={(itemValue) => setSelectedPicker(itemValue)}
                    dropdownIconColor={Colors.selectedColor}
                >
                    <Picker.Item label="Diet" value='1'/>  
                    <Picker.Item label="Workout" value='2'/>
     
                </Picker>
            </View>

            <View style={styles.inputFieldsContainer}>
                <TextInput
                    style={styles.inputField}
                    placeholder={Strings.ExtraCalories}
                    defaultValue={calories}
                    placeholderTextColor={Colors.lightDark}
                    onChangeText={text => setCalories(text)}
                    keyboardType={'numeric'}
                    maxLength={4}
                />
            </View>

            <TouchableOpacity style={styles.nextButton} onPress={nextPressed}>
                <Text style={styles.nextButtonText}>
                    {Strings.AddExtra}
                </Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

export default ExtraItem;