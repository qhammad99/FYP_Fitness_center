/*  
  main app navigations
  start from login
  go to home of user or coach or signup page
*/

import React, {useContext, useEffect, useRef} from 'react';
import {Login, Signup, UserHome, CoachHome} from '../Screens';
import {AuthContext} from '../Context/Providers/AuthProvider';
import {CoachContext} from '../Context/Providers/CoachProvider';
import UserParameter from '../Screens/User/UserParameter/UserParameter/UserParameter';
import UserGoal from '../Screens/User/UserGoal/UserGoal';
import AdminHome from '../Screens/Admin/Home/Home';
import InfoSignup from '../Screens/Coach/InfoSignup';
import clientCoach from '../Context/Actions/clientCoach';
import {ADMIN_MAIL, SIMPLE_URL} from '@env';
import {io} from 'socket.io-client';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Routes = props => {
  const socket = useRef(null);
  const authentication = useContext(AuthContext);
  const Coach = useContext(CoachContext);
  let user = authentication.state.user;
  user = JSON.parse(user);

  useEffect(() => {
    const checking = async () => {
      if (
        authentication.state.user != null &&
        Coach.state.isLoading &&
        user.u_type == 1
      ) {
        await clientCoach(Coach)(authentication);
      }
    };
    checking();
  }, [authentication.state.user]);

  useEffect(() => {
    if (!Coach.state.isLoading) {
      if (!Coach.state.coach.empty) {
        socket.current = io(SIMPLE_URL);
        socket.current.emit('addUser', user.user_id);
        Coach.dispatch({type: 'ADD_SOCKET', payload: socket.current});
      }
    }
  }, [Coach.state.isLoading]);

  useEffect(() => {
    if (Coach.state.socket != null) {
      Coach.state.socket.on('getUsers', users => {
        let onlineCoach = users.find(
          user => user.userId == Coach.state.coach.coach_id,
        );
        if (onlineCoach) Coach.dispatch({type: 'COACH_ONLINE'});
        else Coach.dispatch({type: 'COACH_OFFLINE'});
      });
    }
  }, [Coach.state.socket]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          // login and signup screens
          authentication.state.user == null ? (
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Signup"
                component={Signup}
                options={{headerShown: false}}
              />
        </>
        ):(
          // user screens
        (user.u_type ==1)
          ?(
            (user.email== ADMIN_MAIL)?
            <Stack.Screen 
              name='AdminHome'
              component={AdminHome}
              options={{headerShown:false}}
                />
            :
            (parseInt(user.isParameters) != 0)
              ?
              (
                (parseInt(user.isGoal) != 0)
                ?
                 <Stack.Screen
                  name="UserHome"
                  component={UserHome}
                  options={{headerShown: false}}
                />
                : 
                <Stack.Screen
                  name="UserGoal"
                  component={UserGoal}
                  options={{title: 'Goal'}}
                />
              ) 
              : 
              <Stack.Screen
                name="User Parameter"
                component={UserParameter}
                options={{headerShown: false}}
              />
          ) : 
            // coach screens
            user.u_type == 2 && (
              (parseInt(user.isParameters) != 0)
              ?
              <Stack.Screen
                name="CoachHome"
                component={CoachHome}
                options={{headerShown: false}}
              />
              :
              <Stack.Screen
                name="CoachAdd"
                component={InfoSignup}
                options={{headerShown: false}}
              />
            )
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;


{/* <Stack.Screen
name="Abs"
component={AbsWorkout}
options={{
  headerStyle: {backgroundColor: '#E26F1E'},
  title: 'Abs Workout',
  headerTintColor: '#fff',
}}
/>
<Stack.Screen
name="Arms"
component={ArmsWorkout}
options={{
  headerStyle: {backgroundColor: '#E26F1E'},
  title: 'Arms Workout',
  headerTintColor: '#fff',
}}
/>
<Stack.Screen
name="Chest"
component={ChestWorkout}
options={{
  headerStyle: {backgroundColor: '#E26F1E'},
  title: 'Chest Workout',
  headerTintColor: '#fff',
}}
/>
<Stack.Screen
name="Legs"
component={LegsWorkout}
options={{
  headerStyle: {backgroundColor: '#E26F1E'},
  title: 'Legs Workout',
  headerTintColor: '#fff',
}}
/>

<Stack.Screen
name="Diet Plans"
component={DietPlans}
options={{
  headerStyle: {backgroundColor: '#E26F1E'},
  title: 'Diet Plans',
  headerTintColor: '#fff',
}}
/>
<Stack.Screen
name="Recipe"
component={RecipeDetails}
options={{
  headerStyle: {backgroundColor: '#E26F1E'},
  title: 'Recipe Details',
  headerTintColor: '#fff',
}}
/> */}