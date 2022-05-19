import React, { useEffect } from 'react';
import { View, StatusBar, AppState } from 'react-native';
import Routes from './src/Navigation/Routes';
import Colors from './src/colors/Colors';
import { LogBox } from 'react-native';
import AuthProvider from './src/Context/Providers/AuthProvider';
import ParametersProvider from './src/Context/Providers/ParametersProvider';
import GoalProvider from './src/Context/Providers/GoalProvider';
import CoachProvider from './src/Context/Providers/CoachProvider';
import PushNotification from "react-native-push-notification";
import AsyncStorage from '@react-native-async-storage/async-storage';


import auth, { firebase } from '@react-native-firebase/auth';
import app from '@react-native-firebase/app'
import firestore from '@react-native-firebase/firestore';

const App = () => {

  useEffect(() => {
    createChannels();
    AppState.addEventListener('change', handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);
  const handleAppStateChange = async (nextAppState) => {
    console.log('App State: ' + nextAppState);
    if (nextAppState === "active") {
      let user = JSON.parse(await AsyncStorage.getItem("USER", null))
      console.log(user)
      // return
      if (user != null) {

        // if (user?.email) {
        console.log(user.user_id)
        let data = {
          status: "online"
        }
        // firebase.firestore().collection("users").add(data)
        firebase.firestore()
          .collection('users')
          .doc(user.user_id.toString())
          .set(data, { merge: true })

        // }

      }
    } else if (nextAppState === "inactive" || nextAppState === "background") {
      let user = JSON.parse(await AsyncStorage.getItem("USER", null))
      if (user != null) {
        // if (user?.email) {
        console.log(user.user_id)
        let data = {
          status: "offline"
        }
        firebase.firestore()
          .collection('users')
          .doc(user.user_id.toString())
          .set(data, { merge: true })
        // }
      }
    }
  };
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
              <View style={{ flex: 1, backgroundColor: Colors.light }}>
                <Routes />
              </View>
            </GoalProvider>
          </ParametersProvider>
        </CoachProvider>
      </AuthProvider>
    </>
  );
};

export default App;