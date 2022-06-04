// Landing screen of User
import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '../colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/User/HomeScreen/Home/HomeScreen';
import ProgressScreen from '../Screens/User/Progress';
import MyCoach from './MyCoach';
import CustomHeader from '../components/CustomHeader';
import {CoachContext} from '../Context/Providers/CoachProvider';
import WorkoutNavigation from '../Navigation/WorkoutNavigation';
import DietNavigation from './DietNavigation';
/* some screens later i separate*/
////////////////////////////////////////////////////////////////////////////////////////////////////////

const Tab = createBottomTabNavigator();
const UserBottomNavigation = props => {
  const Coach = useContext(CoachContext);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Coach') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Diet') {
            iconName = focused ? 'restaurant' : 'restaurant-outline';
          } else if (route.name === 'Workout') {
            iconName = focused ? 'walk' : 'walk-outline';
          } else if (route.name === 'Progress') {
            iconName = focused ? 'trending-up' : 'trending-up-outline';
          }

          // You can return any component that you like here!
          return (
            <View style={styles.tabContainer}>
              {route.name === 'Coach' && Coach.state.coahOnline && (
                <View style={styles.tabBadge}>
                  <Text style={styles.tabBadgeText}>{1}</Text>
                </View>
              )}
              <Ionicons name={iconName} size={size} color={color} />
            </View>
          );
        },
        tabBarActiveTintColor: Colors.selectedColor,
        tabBarInactiveTintColor: Colors.lightDark,
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        name="Workout"
        component={WorkoutNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Diet"
        component={DietNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Coach"
        component={MyCoach}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Progress"
        component={ProgressScreen}
        options={{
          headerTitle: () => (
            <CustomHeader title="Progress" drawer={props.navigation} />
          ),
          headerStyle: {backgroundColor: Colors.primary},
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    width: 24,
    height: 24,
    position: 'relative',
  },
  tabBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: '#31a24c',
    borderRadius: 16,
    width: 8,
    height: 8,
    zIndex: 2,
  },
  tabBadgeText: {
    color: '#31a24c',
  },
});

export default UserBottomNavigation;
