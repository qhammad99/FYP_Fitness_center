import React, {useContext} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Strings from '../../../../strings/Strings';
import HeadingAndCaption from '../../../../components/HeadingAndCaption';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import Colors from '../../../../colors/Colors';
import {SignupContext} from '../../../../Context/Providers/SignupProvider';

const SignupAccountType = props =>{
    //states from this component
    const AccountContext = useContext(SignupContext);
    const shiftNameSignup=()=>{
        props.navigation.navigate('Name');
    }

    return(
        <>
            <View style={styles.container}>
                {/*image  */}
                <View style={styles.itemsContainer} >
                    <Image source={require('../../../../images/signupSlogan.png')} style={styles.showImage} />
                </View>
                
                {/* heaging and caption from component */}
                <HeadingAndCaption
                    headingText={Strings.signupQuote}
                    captionText={Strings.flowText}
                />

                <Text style={{fontWeight:'bold', marginTop:20, color:Colors.darkColor}}>{Strings.chooseUserCaption}</Text>
                {/* picker for user type */}
                <Picker
                    selectedValue={AccountContext.account.userType}
                    dropdownIconColor={Colors.selectedColor}
                    style={{width: 130, color:Colors.selectedColor, backgroundColor:"#fff" }}
                    onValueChange={(itemValue) => AccountContext.setAccount({type:"USER_TYPE", payload:itemValue})}
                >
                    <Picker.Item label="User" value='2'/>  
                    <Picker.Item label="Coach" value='3'/>
                    {/* value is user type in database   */}
                </Picker>

                {/* next button */}
                <TouchableOpacity style={styles.nextButton} onPress={shiftNameSignup}>
                        <Text style={styles.nextButtonText}>
                            {Strings.nextText}
                        </Text>
                </TouchableOpacity>
            </View>

            {/* login insetead */}
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.bottomButton} onPress={()=>props.navigation.navigate('Login')}>
                    <Text style={styles.bottomButtonText}>
                        {Strings.loginText}
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default SignupAccountType;