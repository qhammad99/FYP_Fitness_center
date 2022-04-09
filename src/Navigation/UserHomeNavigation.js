// This screen is for navigation of home screen
import React from 'react';
import {
  ToDo,
  DayList,
  ItemDetailShow,
  ExtraItem
} from '../Screens/User/HomeScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../colors/Colors';
import CustomHeader from '../components/CustomHeader';
const Stack = createNativeStackNavigator();

const UserHomeNavigation = props =>{
    return (
        <Stack.Navigator>
          <Stack.Screen 
            name="ToDo" 
            component={ToDo} 
            options={{
               headerTitle: () => <CustomHeader title="Daily Tasks" drawer={props.navigation}/>, 
               headerStyle:{backgroundColor:Colors.primary}, 
               }}>
          </Stack.Screen>

          <Stack.Screen 
            name='DayList' 
            component={DayList} 
            options={{
              headerTitle: () => <CustomHeader title="Daily Record" drawer={props.navigation}/>,
              headerStyle:{backgroundColor:Colors.primary},
              headerBackVisible:false,
            }}>
          </Stack.Screen>

          <Stack.Screen 
            name='ItemDetailShow' 
            component={ItemDetailShow} 
            options={{
              headerTitle: () => <CustomHeader title="Task Details" drawer={props.navigation}/>,
              headerStyle:{backgroundColor:Colors.primary},
              headerBackVisible:false,
            }}>
          </Stack.Screen>

          <Stack.Screen 
            name='ExtraItem' 
            component={ExtraItem} 
            options={{
              headerTitle: () => <CustomHeader title="Extra Task" drawer={props.navigation}/>,
              headerStyle:{backgroundColor:Colors.primary},
              headerBackVisible:false,
            }}>
          </Stack.Screen>
      </Stack.Navigator>
    );
};

export default UserHomeNavigation;