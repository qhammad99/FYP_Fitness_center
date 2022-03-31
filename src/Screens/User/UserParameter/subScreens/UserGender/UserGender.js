import React, {useContext} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {ParametersContext} from '../../../../../Context/Providers/ParametersProvider';
import {Picker} from '@react-native-picker/picker';
import Strings from '../../../../../strings/Strings';
import HeadingAndCaption from '../../../../../components/HeadingAndCaption';
import styles from './styles';
import Colors from '../../../../../colors/Colors';

const UserGender = props =>{
    const Parameters = useContext(ParametersContext);

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
                    selectedValue={Parameters.parameters.gender}
                    style={{width: 130, backgroundColor:'#fff', color:Colors.selectedColor }}
                    onValueChange={(itemValue) => Parameters.setParameters({type:"GENDER", payload:itemValue})}
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