import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Strings from '../../../../../strings/Strings';
import HeadingAndCaption from '../../../../../components/HeadingAndCaption';
import styles from './styles';
import Colors from '../../../../../colors/Colors';

const UserGender = props =>{
    const [selectedValue, setSelectedValue] = useState("1");
    return(
        <>
            <View style={styles.container}>
                {/* heading and caption from component */}
                <HeadingAndCaption
                    headingText={Strings.genderHeadingText}
                    captionText={Strings.genderCaptionText}
                />

                {/* gender input */}
                <View style={styles.inputFieldsContainer}>
                <Text style={{fontWeight:'bold', marginTop:10, color: Colors.darkColor}}>Choose Gender:   </Text>
                {/* picker for user gender */}
                <Picker
                    selectedValue={selectedValue}
                    style={{width: 130, backgroundColor:'#fff', color:Colors.selectedColor }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    dropdownIconColor={Colors.selectedColor}
                >
                    <Picker.Item label="Male" value='1'/>  
                    <Picker.Item label="Female" value='2'/>
     
                </Picker>
                </View>
                
                {/* next button */}
                <TouchableOpacity style={styles.nextButton} onPress={()=>{props.navigation.navigate('BMI')}}>
                        <Text style={styles.nextButtonText}>
                            {Strings.nextText}
                        </Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default UserGender;