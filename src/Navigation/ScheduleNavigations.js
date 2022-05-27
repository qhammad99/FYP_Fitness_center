// This screen is for navigation of home screen
import React from 'react';
import ScheduleScreen from '../Screens/User/Schedule/ScheduleScreen';
import AddNewTask from '../Screens/User/Schedule/AddNewTask';
import TaskDetails from '../Screens/User/Schedule/TaskDetails'; 

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../colors/Colors';
import CustomHeader from '../components/CustomHeader';
const Stack = createNativeStackNavigator();

const ScheduleNavigations = props =>{
    return (
        <Stack.Navigator>
          <Stack.Screen 
            name="Schedule" 
            component={ScheduleScreen} 
            options={{
               headerTitle: () => <CustomHeader title="Schedule" drawer={props.navigation}/>, 
               headerStyle:{backgroundColor:Colors.primary}, 
               headerBackVisible:false,
               }}>
          </Stack.Screen>
          
          <Stack.Screen 
            name='Add Schedule' 
            component={AddNewTask} 
            options={{
              headerTitle: () => <CustomHeader title="Add Schedule" drawer={props.navigation}/>,
              headerStyle:{backgroundColor:Colors.primary},
              headerBackVisible:false,
            }}>
          </Stack.Screen>

          <Stack.Screen 
            name='Task Detail' 
            component={TaskDetails} 
            options={{
              headerTitle: () => <CustomHeader title="Task Details" drawer={props.navigation}/>,
              headerStyle:{backgroundColor:Colors.primary},
              headerBackVisible:false,
            }}>
          </Stack.Screen>
      </Stack.Navigator>
    );
};

export default ScheduleNavigations;