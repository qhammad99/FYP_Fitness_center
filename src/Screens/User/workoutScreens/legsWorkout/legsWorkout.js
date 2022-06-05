import styles from './styles';
import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import Workout from '../../../../components/WorkoutComponent/Workout';

export default function legsWorkout() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../../images/legsHeaderImage.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}> Legs Workouts </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <Workout
          workoutName="Squats"
          sets="3X"
          repetitions="15"
          calories="25"
        />
        <Workout
          workoutName="Single-Leg Deadlift"
          sets="2X"
          repetitions="12"
          calories="16"
        />
      </ScrollView>
    </View>
  );
}
