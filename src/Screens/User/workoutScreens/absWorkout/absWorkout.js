import styles from './styles';
import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import Workout from '../../../../components/WorkoutComponent/Workout';

export default function absWorkout() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../../images/absHeaderImage.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}> Six Pack Abs Workouts </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <Workout
          workoutName="Bent Leg Twist"
          sets="3X"
          repetitions="10"
          calories="12"
        />

        <Workout
          workoutName="Sit-Ups"
          sets="3X"
          repetitions="20"
          calories="18"
        />
      </ScrollView>
    </View>
  );
}
