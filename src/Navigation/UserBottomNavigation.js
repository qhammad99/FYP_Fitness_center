// Landing screen of User
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/User/HomeScreen/Home/HomeScreen';
import ProgressScreen from '../Screens/User/Progress';
import CoachScreen from '../Screens/User/MyCoach';
import CustomHeader from '../components/CustomHeader';

/* some screens later i separate*/
function WorkoutScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: Colors.darkColor }}>Edit Exercices and Workouts Here!</Text>
        </View>
    );
}
function DietScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: Colors.darkColor }}>Edit Recipies and Diets Here!</Text>
        </View>
    );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

const Tab = createBottomTabNavigator();
const UserBottomNavigation = props => {
    return (
        <Tab.Navigator initialRouteName='Home'
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Coach') {
                iconName = focused
                  ? 'person'
                  : 'person-outline';
              } else if (route.name === 'Diet') {
                iconName = focused
                  ? 'restaurant'
                  : 'restaurant-outline';
              } else if (route.name === 'Workout') {
                iconName = focused
                  ? 'walk'
                  : 'walk-outline';
              } else if (route.name === 'Progress') {
                iconName = focused
                  ? 'trending-up'
                  : 'trending-up-outline';
              } 
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: Colors.selectedColor,
            tabBarInactiveTintColor: Colors.lightDark,
            tabBarHideOnKeyboard: true
          })}>
            <Tab.Screen name="Workout" component={WorkoutScreen} />
            <Tab.Screen name="Diet" component={DietScreen} />
            <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
            <Tab.Screen 
                name="Coach" 
                component={CoachScreen} 
                options={{
                    headerTitle: () => <CustomHeader title="Coach" drawer={props.navigation}/>, 
                    headerStyle:{backgroundColor:Colors.primary, shadowColor:'transparent'}, 
                    }}/>

            <Tab.Screen 
                name="Progress" 
                component={ProgressScreen} 
                options={{
                    headerTitle: () => <CustomHeader title="Progress" drawer={props.navigation}/>, 
                    headerStyle:{backgroundColor:Colors.primary}, 
                    }}/>
        </Tab.Navigator>
    );
};

export default UserBottomNavigation;