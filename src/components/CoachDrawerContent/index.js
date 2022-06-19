// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/Providers/AuthProvider';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  ImageBackground,
  Alert,
  Switch
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../../colors/Colors';
import styles from './styles';
import { URL } from '@env';
import Urls from '../../config/env';
const CoachDrawerContent = (props) => {
  const authentication = useContext(AuthContext);
  const [user, setUser] = useState(JSON.parse(authentication.state.user));
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => 
  {
    setIsEnabled(previousState => !previousState)
  };
  
  const clearLoactStorage = async () => {
    try {
      await AsyncStorage.removeItem('USER');
    } catch (e) {
      console.log("error in clearing local storage, ", e);
    }

    authentication.dispatch({ type: 'SIGN_OUT' });
  }

  const logoutAlert = () => {
    Alert.alert(
      'Logout',
      "Are you sure to logout?",
      [
        {
          text: "CANCEL",
          styles: "cancel"
        },
        {
          text: "YES",
          onPress: () => clearLoactStorage()
        }
      ]);
  }
  const UpdateCoachStatus = () => {
    let user=  JSON.parse(authentication.state.user);
     fetch (URL+"/coach-status-update",{
       method: "PATCH",
       header:{
        'Authorization': `Bearer ${user.token}`,
        'Content-Type': `application/json`,
       },
       body:JSON.stringify({
         user_id:user.user_id
       })
       })
       .then((res)=>{alert(JSON.stringify(res))})
       // fetch("https://f780-39-46-240-174.in.ngrok.io/api/v1/coach-status-update", {
     // method: "POST"
  }
  return (
    <SafeAreaView style={styles.container}>

      {/*Top Header */}
      <ImageBackground
        style={styles.backgroundImage}
        resizeMode='contain'
        source={require('../../images/drawerBackground.png')}
      >
        <View style={styles.sideMenuProfileIconContainer}>
          <Image
            // source={require('../../images/userAvatar.png')}
            source={{ uri: URL + '/public/userImages/' + user.img_file }}
            style={styles.sideMenuProfileIcon}
          />
        </View>
        <Text style={styles.nameText}>
          {user.name}
        </Text>
        {/* <Text style={styles.numberOfGoals}>
            Clients: 0
        </Text> */}
      </ImageBackground>

      {/* drawer screens */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          marginLeft: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 20
        }}
      >
        <Text
          style={{
            fontSize: 15,
            color: Colors.selectedColor,
            fontWeight: 'bold'
          }}
        >Availability:</Text>
        
      <Switch
        trackColor={{ false: "#767577", true: "grey" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      
      </View>
      {/* bottom */}
      <DrawerItem
        label="Logout"
        labelStyle={styles.bottomItem}
        icon={() => <Ionicons name="exit-outline" size={22} color={Colors.selectedColor} />}
        onPress={logoutAlert}
      />
    </SafeAreaView>
  );
};

export default CoachDrawerContent;