/*  
  main app navigations
  start from login
  go to home of user or coach or signup page
*/

import React, {useContext} from 'react';
import { Login, Signup, UserHome, CoachHome }from '../Screens';
import { AuthContext } from '../Context/Providers/AuthProvider';
import UserParameter from '../Screens/User/UserParameter/UserParameter/UserParameter';
import UserGoal from '../Screens/User/UserGoal/UserGoal';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const Routes = (props) => {
  const authentication = useContext(AuthContext);
  let user = authentication.state.user;
  let parameter = authentication.state.isParameters;
  let goal = authentication.state.isGoal;
  
  user= JSON.parse(user);
  console.log("from routes: ",authentication);

  return(
      <NavigationContainer>
      <Stack.Navigator>
        {
          // login and signup screens
          authentication.state.user==null ? (
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Signup"
                component={Signup}
                options={{ headerShown: false }}
              />
        </>
        ):(
          // user screens
        (user.u_type ==2)
          ?(
            parameter
              ?
              (
                goal
                ?
                  <Stack.Screen
                    name="UserHome"
                    component={UserHome}
                    options={{ headerShown: false }}
                  />
                :
                  <Stack.Screen
                    name="UserGoal"
                    component={UserGoal}
                    options={{ title:"Goal" }}
                  />
              )
                
              :
                <Stack.Screen
                  name="User Parameter"
                  component={UserParameter}
                  options={{ headerShown: false }}
                />
          )
        :
        // coach screens
        (user.u_type ==3 &&
        <Stack.Screen 
          name="CoachHome" 
          component={CoachHome}
          options={{ headerShown:false }} 
        />)
        )
        }
        
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Routes;