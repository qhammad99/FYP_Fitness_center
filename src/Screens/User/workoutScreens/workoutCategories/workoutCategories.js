import React from 'react';
import styles from './styles';
import {Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import Colors from '../../../../colors/Colors';

export default function workoutCategories({navigation}) {
  const DATA = [
    {
      id: 1,
      title: 'Workout 1',
      sets: '2X',
      repetitions: 20,
      calories: 14,
    },
    {
      id: 2,
      title: 'Workout 2',
      sets: '2X',
      repetitions: 20,
      calories: 14,
    },
    {
      id: 3,
      title: 'Workout 3',
      sets: '2X',
      repetitions: 20,
      calories: 14,
    },
  ];

  return (
    <View style={styles.container}>
      {/* floating action button to create new workout plan */}
      <TouchableOpacity
        style={{
          width: 60,
          height: 60,
          position: 'absolute',
          zIndex: 1,
          backgroundColor: Colors.primary,
          borderRadius: 50,
          right: 10,
          bottom: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Create', {data: DATA})}>
        <Image
          source={require('../../../../Assets/createPlan.png')}
          resizeMode="contain"
          style={{height: 30, width: 30, tintColor: 'white'}}
        />
      </TouchableOpacity>
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
