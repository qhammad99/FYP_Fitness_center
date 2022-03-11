// display a heading and a caption.
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from '../colors/Colors';

const HeadingAndCaption = props =>{
    return(
        <>
            {/*Heading*/}
            <Text style={styles.headingText}>
                {props.headingText}
            </Text>
            
            {/*caption */}
            <Text style={styles.captionText}>
                {props.captionText}
            </Text>
            
        </>
    );
};

const styles= StyleSheet.create({
    headingText:{
        fontSize:18,
        fontWeight:'bold',
        marginTop: 50,
        textAlign:'center',
        color:Colors.darkColor
    },
    captionText:{
        marginTop: 10, 
        textAlign: 'center',
        color:Colors.darkColor
    }
});

export default HeadingAndCaption;