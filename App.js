import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import Routes from './src/Navigation/Routes';
import Colors from './src/colors/Colors';
import { LogBox } from 'react-native';
import AuthProvider from './src/Context/Providers/AuthProvider';
import ParametersProvider from './src/Context/Providers/ParametersProvider';
import GoalProvider from './src/Context/Providers/GoalProvider';
import CoachProvider from './src/Context/Providers/CoachProvider';
import AdminProvider from './src/Context/Providers/AdminProvider';
import PushNotification from "react-native-push-notification";

const App = () => {

  useEffect(() => {
    createChannels();
  }, []);

  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: "test-channel",
      channelName: "Test Channel"
    })
  }

  return (
    <>
      <StatusBar backgroundColor={Colors.primary} />

      {/* link with context */}
      <AuthProvider>
        <CoachProvider>
        <ParametersProvider>
          <GoalProvider>
            <AdminProvider>
            <View style={{flex:1, backgroundColor:Colors.light}}>
              <Routes />  
            </View>
            </AdminProvider>
          </GoalProvider>
        </ParametersProvider>
        </CoachProvider>
      </AuthProvider>
    </>
  );
};

export default App;