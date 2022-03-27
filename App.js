import React from 'react';
import { View, StatusBar } from 'react-native';
import Routes from './src/Navigation/Routes';
import Colors from './src/colors/Colors';
import { LogBox } from 'react-native';
import AuthProvider from './src/Context/Providers/AuthProvider';
import ParametersProvider from './src/Context/Providers/ParametersProvider';
import GoalProvider from './src/Context/Providers/GoalProvider';

const App = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);
  
  return(
    <>
      <StatusBar backgroundColor={Colors.primary} />
      
      {/* link with context */}
      <AuthProvider>
        <ParametersProvider>
          <GoalProvider>
            <View style={{flex:1, backgroundColor:Colors.light}}>
              <Routes />  
            </View>
          </GoalProvider>
        </ParametersProvider>
      </AuthProvider>
    </>
  );
};

export default App;