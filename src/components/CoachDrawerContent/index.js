// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
import React,{useContext} from 'react';
import { AuthContext } from '../../Context/Providers/AuthProvider';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  ImageBackground,
  Alert
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

const CoachDrawerContent = (props) => {
  const authentication = useContext( AuthContext);

  const clearLoactStorage = async() =>{
    try{
      await AsyncStorage.removeItem('USER');
    }catch(e){
      console.log("error in clearing local storage, ", e);
    }

    authentication.dispatch({type:'SIGN_OUT'});
  }

  const logoutAlert = () => {
    Alert.alert(
      'Logout', 
      "Are you sure to logout?",
      [
        {
          text:"CANCEL",
          styles:"cancel"
        },
        {
          text: "YES",
          onPress:()=>clearLoactStorage()
        }
      ]);
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
                source={require('../../images/userAvatar.png')}
                style={styles.sideMenuProfileIcon}
            />
        </View>
        <Text style={styles.nameText}>
            Hammad Ahmad Qureshi
        </Text>
        <Text style={styles.numberOfGoals}>
            Clients: 0
        </Text>
      </ImageBackground>

      {/* drawer screens */}
      <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* bottom */}
      <DrawerItem
          label="Logout"
          labelStyle={styles.bottomItem}
          icon={()=><Ionicons name="exit-outline" size={22} color={Colors.selectedColor}/>}
          onPress={logoutAlert}
        />
    </SafeAreaView>
  );
};

export default CoachDrawerContent;