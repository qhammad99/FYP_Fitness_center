import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import Strings from '../../../../../strings/Strings';
import HeadingAndCaption from '../../../../../components/HeadingAndCaption';
import styles from './styles';

const ParameterIntro = props =>{
    return(
        <>
            <View style={styles.container}>
                <Image 
                    style={styles.checkIcon} 
                    source={require('../../../../../images/checkIcon.png')}
                />
                {/* heading and caption from component */}
                <HeadingAndCaption
                    headingText={Strings.introHeadingText}
                    captionText={Strings.introCaptionText}
                />
          
                {/* next button */}
                <TouchableOpacity style={styles.nextButton} onPress={()=>{props.navigation.navigate('DOB')}}>
                        <Text style={styles.nextButtonText}>
                            {Strings.nextText}
                        </Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default ParameterIntro;