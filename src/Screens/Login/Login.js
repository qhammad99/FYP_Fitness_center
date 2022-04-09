import React, { useState, useContext } from 'react';
import {View, Text, Image, ToastAndroid, AlertIOS, Button, TextInput, TouchableOpacity,} from 'react-native';
import Colors from '../../colors/Colors'
import styles from './styles';
import Strings from '../../strings/Strings';
import { AuthContext } from '../../Context/Providers/AuthProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import loginUser from '../../Context/Actions/loginUser';

const Login = props => {
    const authentication = useContext(AuthContext);

    const [emailText, setEmailText]=useState('');
    const [passText, setPassText]=useState('');

    const [passwordVisible, setPasswordVisible]=useState(false);

    const checkLogin= ()=>{
        var emailValidation=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.
        let passwordValidation=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if(emailText.length==0 || passText.length==0){
            alert("Required Fields are missing");
        } else if(!emailValidation.test(emailText)){
            alert("Email format is not good");
        } else if(!passwordValidation.test(passText)){
            alert("password must contain length of 6 to 20 and one number, one lower and one upper");
        }else {
            loginUser(emailText, passText)(authentication);
        }
    }


    return(
        <View style={styles.container}>
        {/* banner image */}
        <View style={styles.bannerImageContainer}>
            <Image style={styles.bannerImage} source={require('../../images/loginHeader.png')}/>
        </View>

        {/* language selector */}
        {/* <View style={styles.languageSelector}>
            //english
            <TouchableOpacity style={styles.languageButton} >
                <Text style={styles.btnLnText}> 
                    {Strings.englishLanguage} 
                </Text>
            </TouchableOpacity>

            //urdu
            <TouchableOpacity style={styles.languageButton} >
                <Text style={styles.btnLnText}> 
                    {Strings.urduLanguage} 
                </Text>
            </TouchableOpacity>
        </View> */}

        {/* input fields container */}
        <View style={styles.fieldsContainer}>
            {/* email input */}
            <TextInput 
                style={styles.inputField} 
                placeholder={Strings.emailPlaceholder}
                placeholderTextColor={Colors.lightDark}
                defaultValue={emailText}
                onChangeText={text=>setEmailText(text)}
            />

            {/* password input */}
            <View style={styles.passwordFieldContainer}>
            <TextInput 
                style={styles.passwordField} 
                placeholder={Strings.passwordPlaceholder}
                placeholderTextColor={Colors.lightDark}
                secureTextEntry={!passwordVisible}
                defaultValue={passText}
                onChangeText={pass=>setPassText(pass)} 
            />
            <TouchableOpacity onPress={()=>passwordVisible?setPasswordVisible(false):setPasswordVisible(true)}>
                <Ionicons name={!passwordVisible?"ios-eye-off":"ios-eye"} color={Colors.selectedColor} size={20}/>
            </TouchableOpacity>
            </View>

            {/* login button */}
            <TouchableOpacity style={styles.loginButton} onPress={checkLogin}>
                <Text style={styles.loginButtonText}> 
                    {Strings.loginButtonText} 
                </Text>
            </TouchableOpacity>

            {/* forgot password */}
            <TouchableOpacity style={styles.forgotPwdButton} >
                <Text style={styles.forgotPwdButtonText}> 
                    {Strings.forgotPasswordText} 
                </Text>
            </TouchableOpacity>
        </View>

        {/* separator bar */}
        <Text style={styles.separator}>
            ───────────── {Strings.spliterText} ─────────────
        </Text>

        {/* signup button */}
        <View style={styles.signupButtons}>
            <View style={{width:250}}>
                <Button 
                    onPress={()=>{props.navigation.navigate('Signup')}} 
                    title={Strings.signupText}
                    color={Colors.minorColor}
                />
            </View>
        </View>
    </View>
    );
};

export default Login;