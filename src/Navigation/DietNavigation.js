import {View, Text} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Colors from '../colors/Colors';
import CustomHeader from '../components/CustomHeader';
const Stack = createNativeStackNavigator();
import DietPlans from '../Screens/User/DietModule/DietPlans';
import RecipeDetails from '../Screens/User/DietModule/RecipeDetails';
import NewRecipe from '../Screens/User/DietModule/NewRecipe';
import NewPlan from '../Screens/User/DietModule/NewPlan';

const DietNavigation = props => {
  return (
    <Stack.Navigator>
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
      <Stack.Screen
        name="Recipe"
        component={RecipeDetails}
        options={{
          headerTitle: () => (
            <CustomHeader title="Recipe Details" drawer={props.navigation} />
          ),
          headerStyle: {backgroundColor: Colors.primary},
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="New"
        component={NewRecipe}
        options={{
          headerTitle: () => (
            <CustomHeader title="Add New Recipe" drawer={props.navigation} />
          ),
          headerStyle: {backgroundColor: Colors.primary},
          headerBackVisible: false,
        }}
      />

      <Stack.Screen
        name="plan"
        component={NewPlan}
        options={{
          headerTitle: () => (
            <CustomHeader title="Add New Diet Plan" drawer={props.navigation} />
          ),
          headerStyle: {backgroundColor: Colors.primary},
          headerBackVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default DietNavigation;
