import React from 'react';
import styles from './styles';
import {Text, View, TouchableOpacity, TextInput, Image} from 'react-native';

export default function workoutCategories({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.categoriesWrapper}>
        <Text style={styles.sectionTitle}>Workout Categories</Text>
      </View>

      {/* search bar and button */}
      <TextInput
        style={styles.searchBar}
        placeholderTextColor="grey"
        placeholder={'Search Workouts'}
      />
      <TouchableOpacity>
        <View style={styles.searchButton}>
          <Text style={{color: '#fff'}}>Search</Text>
        </View>
      </TouchableOpacity>

      {/* Arms wokrout section. Passes data to Workout screen */}
      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          navigation.navigate('Workouts', {
            workoutName: 'Arms Workout',
            sets: '2X',
            repetitions: 20,
            calories: 14,
            headerText: 'Arms Workouts',
            image: require('../../../../images/armWorkoutHeaderImage.png'),
          })
        }>
        <Image
          source={require('../../../../images/Arms.jpg')}
          style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>Arm Workouts</Text>
      </TouchableOpacity>

      {/* Chest wokrout section. Passes data to Workout screen */}
      <TouchableOpacity
        style={styles.itemDupl}
        onPress={() =>
          navigation.navigate('Workouts', {
            workoutName: 'Chest Workout',
            sets: '2X',
            repetitions: 20,
            calories: 14,
            headerText: 'Chest Workout',
            image: require('../../../../images/chestHeaderImage.png'),
          })
        }>
        <Image
          source={require('../../../../images/chestBody.png')}
          style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>Chest Workouts</Text>
      </TouchableOpacity>

      {/* Legs wokrout section. Passes data to Workout screen */}
      <TouchableOpacity
        style={styles.itemDupl}
        onPress={() =>
          navigation.navigate('Workouts', {
            workoutName: 'Legs Workout',
            sets: '2X',
            repetitions: 20,
            calories: 14,
            headerText: 'Legs Workouts',
            image: require('../../../../images/legsHeaderImage.png'),
          })
        }>
        <Image
          source={require('../../../../images/Legs.png')}
          style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>Legs Workouts</Text>
      </TouchableOpacity>

      {/* Abs wokrout section. Passes data to Workout screen */}
      <TouchableOpacity
        style={styles.itemDupl}
        onPress={() =>
          navigation.navigate('Workouts', {
            workoutName: 'Hello',
            sets: '2X',
            repetitions: 20,
            calories: 14,
            headerText: 'Abs Workout',
            image: require('../../../../images/absHeaderImage.png'),
          })
        }>
        <Image
          source={require('../../../../images/absbody.png')}
          style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>Abs Workouts</Text>
      </TouchableOpacity>
    </View>
  );
}
