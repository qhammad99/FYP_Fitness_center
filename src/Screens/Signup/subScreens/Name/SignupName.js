import React, {useContext} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import Strings from '../../../../strings/Strings';
import HeadingAndCaption from '../../../../components/HeadingAndCaption';
import styles from './styles';
import Colors from '../../../../colors/Colors';
import { SignupContext } from '../../../../Context/Providers/SignupProvider';

const SignupName = props =>{
    // state of this component
    const AccountContext = useContext(SignupContext);

    const nextPressed = () =>{
        if(AccountContext.account.firstName.length==0 || AccountContext.account.secondName.length==0){
            alert("Required Fields are missing");
        } else {
            props.navigation.navigate('Email');
        }
    }
    return(
        <>
            <View style={styles.container}>
                {/* heaging and caption from component */}
                <HeadingAndCaption
                    headingText={Strings.nameHeadingText}
                    captionText={Strings.nameCaptionText}
                />

                {/* first name and last name input */}
                <View style={styles.inputFieldsContainer}>
                    <TextInput 
                        placeholder={Strings.firstNameLabel} 
                        placeholderTextColor={Colors.lightDark}
                        style={styles.inputField}
                        defaultValue={AccountContext.account.firstName}
                        onChangeText={fName => AccountContext.setAccount({type:"FIRST_NAME", payload:fName})}
                    />
                    <TextInput 
                        placeholder={Strings.lastNameLabel}
                        placeholderTextColor={Colors.lightDark}
                        style={styles.inputField}
                        defaultValue={AccountContext.account.secondName}
                        onChangeText={sName=>AccountContext.setAccount({type:"SECOND_NAME", payload:sName})}
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

export default SignupName;