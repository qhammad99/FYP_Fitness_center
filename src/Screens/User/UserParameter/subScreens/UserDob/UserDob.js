import React, {useState, useContext, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Strings from '../../../../../strings/Strings';
import HeadingAndCaption from '../../../../../components/HeadingAndCaption';
import {ParametersContext} from '../../../../../Context/Providers/ParametersProvider';
import DateTimePicker from '@react-native-community/datetimepicker'; // for date inputs in react native
import styles from './styles';

const UserDob = props =>{
    const Parameters = useContext(ParametersContext);

    const [date, setDate] = useState(new Date());
    useEffect(()=>{
        changeAge();
    }, [date]);

    const [show, setShow] = useState(false);
    const [age, setAge] =useState(0);
    const [firstClicked, setFirstClicked] = useState(false); // to display nothing in date and age textView firstTime
    
    const nextPressed =() =>{
        if(age == 0){
            alert("Please select the valid date of birth");
        }else if(age<10 || age >70){
            alert("Only availabe for 10-70 age people");
        }else
            props.navigation.navigate('Gender');
    }

    const onChangeDateSelection = (event, selectedDate) => {
        const newSelectedDate= selectedDate || date;
        let month = ('0'+(newSelectedDate.getMonth()+1)).slice(-2);
        let date = ('0'+newSelectedDate.getDate()).slice(-2);
        const formattedDate = `${newSelectedDate.getFullYear()}-${month}-${date}`;

        if(Platform.OS==='android'){
            setShow(false); //hide the calendar view
        }
        if(!firstClicked){
            setFirstClicked(true);
        }
        Parameters.setParameters({type:"DOB", payload:formattedDate});
        setDate(newSelectedDate);
    };

    const changeAge = () =>{
        const today= new Date();
        let newAge = (today.getFullYear() - date.getFullYear());

        let monthChecker= today.getMonth() - date.getMonth();
        if(monthChecker<0 || (monthChecker == 0 && today.getDate() < date.getDate())){
            setAge(newAge-1);
        }else
            setAge(newAge);
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
                    <TouchableOpacity style={styles.claendarIconContainer}   onPress={()=>setShow(true)}>
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
                        {firstClicked?age+Strings.ageLabelText:""}
                    </Text>
                </View>

                {/* next button */}
                <TouchableOpacity style={styles.nextButton} onPress={nextPressed}>
                        <Text style={styles.nextButtonText}>
                            {Strings.nextText}
                        </Text>
                </TouchableOpacity>

                {/* show and hide calendar input */}
                    {show && (
                    <DateTimePicker
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