import React, {useContext} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import Strings from '../../../../strings/Strings';
import HeadingAndCaption from '../../../../components/HeadingAndCaption';
import styles from './styles';
import Colors from '../../../../colors/Colors';
import { SignupContext } from '../../../../Context/Providers/SignupProvider';

const SignupEmail = props =>{
    const AccountContext= useContext(SignupContext);

    const nextPressed =()=>{
        const email= AccountContext.account.email;
        var emailValidation=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!email || email.length==0){
            alert("Required Fields are missing");
        }else if(!emailValidation.test(email)){
            alert("Email format is not good");
        } else{
            props.navigation.navigate('Password');
        }
    }
    
    return(
        <>
            <View style={styles.container}>
                {/* heaging and caption from component */}
                <HeadingAndCaption
                    headingText={Strings.mailHeadingText}
                    captionText={Strings.mailCaptionText}
                />

                {/* first name and last name input */}
                <View style={styles.inputFieldsContainer}>
                    <TextInput 
                        placeholder={Strings.mailLabelText}
                        placeholderTextColor={Colors.lightDark} 
                        style={styles.inputField}
                        defaultValue={AccountContext.account.email}
                        onChangeText={mail=>AccountContext.setAccount({type:"EMAIL", payload: mail})}
                    />
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

export default SignupEmail;