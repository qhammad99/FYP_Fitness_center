import styles from './styles';
import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import Workout from '../../../../components/WorkoutComponent/Workout';

export default function chestWorkout() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../../images/chestHeaderImage.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}> Chest Workouts </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <Workout
          workoutName="Chest Fly"
          sets="3X"
          repetitions="12"
          calories="21"
        />
        <Workout
          workoutName="Barbell Bench Press Lifts"
          sets="3X"
          repetitions="14"
          calories="18"
        />
      </ScrollView>
    </View>
  );
}
