import {View, Text} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Colors from '../colors/Colors';
import CustomHeader from '../components/CustomHeader';
const Stack = createNativeStackNavigator();
import AbsWorkout from '../Screens/User/workoutScreens/absWorkout/absWorkout';
import ArmsWorkout from '../Screens/User/workoutScreens/armsWorkout/armsWorkout';
import ChestWorkout from '../Screens/User/workoutScreens/chestWorkout/chestWorkout';
import LegsWorkout from '../Screens/User/workoutScreens/legsWorkout/legsWorkout';
import DietPlans from '../Screens/User/DietModule/DietPlans';
import WorkoutCategories from '../Screens/User/workoutScreens/workoutCategories/workoutCategories';

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
        name="Abs"
        component={AbsWorkout}
        options={{
          headerTitle: () => (
            <CustomHeader title="Abs Workout" drawer={props.navigation} />
          ),
          headerStyle: {backgroundColor: Colors.primary},
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="Arms"
        component={ArmsWorkout}
        options={{
          headerTitle: () => (
            <CustomHeader title="Arms Workout" drawer={props.navigation} />
          ),
          headerStyle: {backgroundColor: Colors.primary},
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="Chest"
        component={ChestWorkout}
        options={{
          headerTitle: () => (
            <CustomHeader title="Chest Workout" drawer={props.navigation} />
          ),
          headerStyle: {backgroundColor: Colors.primary},
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="Legs"
        component={LegsWorkout}
        options={{
          headerTitle: () => (
            <CustomHeader title="Legs Workout" drawer={props.navigation} />
          ),
          headerStyle: {backgroundColor: Colors.primary},
          headerBackVisible: false,
        }}
      />

      <Stack.Screen
        name="Diet Plans"
        component={DietPlans}
        options={{
          headerTitle: () => (
            <CustomHeader title="Diet Plans" drawer={props.navigation} />
          ),
          headerStyle: {backgroundColor: Colors.primary},
          headerBackVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default WorkoutNavigation;
