import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Strings from '../../../../../strings/Strings';
import HeadingAndCaption from '../../../../../components/HeadingAndCaption';
import DateTimePicker from '@react-native-community/datetimepicker'; // for date inputs in react native
import styles from './styles';

const UserDob = props =>{
    ///////////////////////////////////////////
    // states and functions for date and age //

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [firstClicked, setFirstClicked] = useState(false); // to display nothing in date and age textView firstTime
    
    const onChangeDateSelection = (event, selectedDate) => {
        const newSelectedDate= selectedDate || date;
        setDate(newSelectedDate);
        if(Platform.OS==='android'){
            setShow(false); //hide the calendar view
        }
        if(!firstClicked){
            setFirstClicked(true);
        }
    };
    
    const changeAge=()=>{
        let age=0;
        const today= new Date();
        age= today.getFullYear() - date.getFullYear();
        let monthChecker= today.getMonth() - date.getMonth();
        if(monthChecker<0 || (monthChecker == 0 && today.getDate() < date.getDate())){
            age--;
        }
        return age;
    };

    const changeShow=()=>{
        setShow(true);
    }   

    const monthNames = ["January", "February", "March", "April", "May", "June",
       "July", "August", "September", "October", "November", "December"];
        
    const showDate=()=>{
        return date.getDate() + " / " + monthNames[date.getMonth()] + " / "+ date.getFullYear();
    }

    return(
        <>
            <View style={styles.container}>
                <HeadingAndCaption
                    headingText={Strings.dobHeadingText}
                    captionText={Strings.dobCaptionText}
                />

                <View style={{ marginTop: 20 }}>
                    {/*display calendar icon and on click change show state*/}
                    <TouchableOpacity style={styles.claendarIconContainer}   onPress={changeShow}>
                        <Image 
                            style={styles.claendarIcon} 
                            source={require('../../../../../images/calendarIcon.png')}
                        />
                    </TouchableOpacity>

                    {/*display date entered throught calendar*/}
                    <Text style={styles.displayDate}>
                        {firstClicked?showDate():Strings.dobLabelText}
                    </Text>
                    
                    {/* calculating age with the help of current date and entered date*/}
                    <Text style={styles.displayAge}>
                        {firstClicked?changeAge()+Strings.ageLabelText:""}
                    </Text>
                </View>

                {/* next button */}
                <TouchableOpacity style={styles.nextButton} onPress={()=>{props.navigation.navigate('Gender')}}>
                        <Text style={styles.nextButtonText}>
                            {Strings.nextText}
                        </Text>
                </TouchableOpacity>

                {/* show and hide calendar input */}
                    {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        display="default"
                        onChange={onChangeDateSelection}
                    />
                )}
            </View>
        </>
    );
};

export default UserDob;