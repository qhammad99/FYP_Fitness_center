import {View, Text} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Colors from '../colors/Colors';
import CustomHeader from '../components/CustomHeader';
const Stack = createNativeStackNavigator();
import Workout from '../Screens/User/workoutScreens/Workouts/Workout';
import WorkoutCategories from '../Screens/User/workoutScreens/workoutCategories/workoutCategories';
import CreatePlan from '../Screens/User/workoutScreens/CreatePlan';

const WorkoutNavigation = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={WorkoutCategories}
        options={{
          headerTitle: () => (
            <CustomHeader
              title="Workout Categories"
              drawer={props.navigation}
            />
          ),
          headerStyle: {backgroundColor: Colors.primary},
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="Workouts"
        component={Workout}
        options={{
          headerTitle: () => (
            <CustomHeader title="Workout Plans" drawer={props.navigation} />
          ),
          headerStyle: {backgroundColor: Colors.primary},
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="Create"
        component={CreatePlan}
        options={{
          headerTitle: () => (
            <CustomHeader title="Create Plan" drawer={props.navigation} />
          ),
          headerStyle: {backgroundColor: Colors.primary},
          headerBackVisible: false,
        }}
      />
      
    </Stack.Navigator>
  );
};
export default WorkoutNavigation;
