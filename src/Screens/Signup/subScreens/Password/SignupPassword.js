import React, {useState, useContext} from 'react';
import { View, TouchableOpacity, Text, TextInput} from 'react-native';
import Strings from '../../../../strings/Strings';
import HeadingAndCaption from '../../../../components/HeadingAndCaption';
import styles from './styles';
import Colors from '../../../../colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SignupContext } from '../../../../Context/Providers/SignupProvider';
import { AuthContext } from '../../../../Context/Providers/AuthProvider';
import addUser from '../../../../Context/Actions/addUser';

const SignupPassword = props =>{
    const AccountContext = useContext(SignupContext);
    const authentication = useContext(AuthContext);

    const [cPass, setCPass]=useState('');

    const [passwordVisible, setPasswordVisible]=useState(false);
    const [cPasswordVisible, setCPasswordVisible]=useState(false);

    const nextPressed = () =>{
        // password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.
        let passwordValidation=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        const pass=AccountContext.account.password;
        if(pass.length==0 || cPass.length==0){
            alert("Required Fields are missing");
        } else if(!passwordValidation.test(pass)){
            alert("password must contain length of 6 to 20 and one number, one lower and one upper");
        } else if(!(pass == cPass)){
            alert("Not matched");
        } else
            addUser(AccountContext.account)(authentication);
    }
    return(
        <>
            <View style={styles.container}>
                {/* heaging and caption from component */}
                <HeadingAndCaption
                    headingText={Strings.passHeadingText}
                    captionText={Strings.passCaptionText}
                />

                {/* first name and last name input */}
                <View style={styles.inputFieldsContainer}>
      
                    <View style={styles.passwordFieldContainer}>
                        <TextInput
                            style={styles.passwordField}
                            placeholder={Strings.passLabelText}
                            placeholderTextColor={Colors.lightDark}
                            secureTextEntry={!passwordVisible}
                            defaultValue={AccountContext.account.password}
                            onChangeText={pas => AccountContext.setAccount({type:"PASSWORD", payload:pas})}
                        />
                        <TouchableOpacity onPress={() => passwordVisible ? setPasswordVisible(false) : setPasswordVisible(true)}>
                            <Ionicons name={!passwordVisible ? "ios-eye-off" : "ios-eye"} color={Colors.selectedColor} size={20} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.passwordFieldContainer}>
                        <TextInput
                            style={styles.passwordField}
                            placeholder={Strings.cPassLabelText}
                            placeholderTextColor={Colors.lightDark}
                            secureTextEntry={!cPasswordVisible}
                            defaultValue={cPass}
                            onChangeText={cpas=>setCPass(cpas)}
                        />
                        <TouchableOpacity onPress={() => cPasswordVisible ? setCPasswordVisible(false) : setCPasswordVisible(true)}>
                            <Ionicons name={!cPasswordVisible ? "ios-eye-off" : "ios-eye"} color={Colors.selectedColor} size={20} />
                        </TouchableOpacity>
                    </View>
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

export default SignupPassword;