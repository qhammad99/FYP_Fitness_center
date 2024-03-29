// this routes are called in user bottom navigation for my coach

import React, {useContext} from 'react';
import AvailableCoachs from '../Screens/User/AvailableCoachs';
import MyCoachInfo from '../Screens/User/MyCoachInfo';
import MyCoachChat from '../Screens/User/MyCoachChat';
import {CoachContext} from '../Context/Providers/CoachProvider';
import CustomHeader from '../components/CustomHeader';
import Colors from '../colors/Colors';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const MyCoach = props => {
    const Coach = useContext(CoachContext);
    return (
        <Stack.Navigator>
            {
                Coach.state.coach.empty &&
                <Stack.Screen
                    name="MyCoach"
                    component={AvailableCoachs}
                    options={{
                        headerTitle: () => <CustomHeader title="Coach" drawer={props.navigation}/>, 
                        headerStyle:{
                            backgroundColor:Colors.primary, 
                        },
                        headerShadowVisible: false,
                        }}
                    />
            }
            {
                !Coach.state.coach.empty &&(
                    <>
                <Stack.Screen
                name="MyCoachChat"
                component={MyCoachChat}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="MyCoachInfo"
                component={MyCoachInfo}
                options={{headerShown:false}}
            />
            </>)
            }
            
        </Stack.Navigator>
    );
}

export default MyCoach;