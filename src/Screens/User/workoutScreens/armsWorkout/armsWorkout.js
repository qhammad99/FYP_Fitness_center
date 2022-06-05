import styles from '../armsWorkout/styles';
import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import Workout from '../../../../components/WorkoutComponent/Workout';

export default function armsWorkout() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../../images/armWorkoutHeaderImage.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}> Arms Workouts </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <Workout
          workoutName="Jumping Jacks"
          sets="3X"
          repetitions="20"
          calories="9"
        />
        <Workout
          workoutName="Push-Ups"
          sets="3X"
          repetitions="10"
          calories="27"
        />
      </ScrollView>
    </View>
  );
}
