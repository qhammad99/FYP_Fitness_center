import { StatusBar } from "expo-status-bar";
import React from 'react';
import styles from "./styles";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";


 export default function workoutCategories({navigation}) {

  const shiftArmsWorkout=()=>{
    props.navigation.navigate('Arms');
  }
  return (
    <View style={styles.container}>
      <View style={styles.categoriesWrapper}>
        <Text style={styles.sectionTitle}>Workout Categories</Text>
      </View>

      <TextInput style={styles.searchBar} placeholderTextColor='grey' placeholder={'Search Workouts'} />
      <TouchableOpacity>
        <View style={styles.searchButton}>
          <Text style={{color: '#fff'}} >Search</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('Arms')}>
        <Image
          source={require("../../../../images/Arms.jpg")}
          style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>Arm Workouts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemDupl} onPress={()=>navigation.navigate('Chest')}>
        <Image
          source={require("../../../../images/chestBody.png")}
          style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>Chest Workouts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemDupl} onPress={()=>navigation.navigate('Legs')}>
        <Image
          source={require("../../../../images/Legs.png")}
          style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>Legs Workouts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemDupl} onPress={()=>navigation.navigate('Abs')}>
        <Image
          source={require("../../../../images/absbody.png")}
          style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>Abs Workouts</Text>
      </TouchableOpacity>
    </View>
  );
}
