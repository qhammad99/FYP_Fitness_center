import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Workout({workoutName, sets, repetitions, calories}) {
  return (
    <View style={styles.exercises}>
      <View style={styles.insideExercises}>

          {/* name of the exercises come here */}

        <Text style={styles.exeText}>{workoutName}</Text>

        {/* add button */}
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}> Add</Text>
        </TouchableOpacity>
      </View>

      {/* number of sets and repetitions */}
      <View>
        <Text style={{color: 'grey', paddingStart: 10}}>
          {sets} {repetitions}
        </Text>
      </View>

      {/* calories in the workouts */}
      <View>
        <Text style={{color: 'grey', paddingStart: 10}}>
          Calories: {calories}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  exercises: {
    backgroundColor: '#f2f3f8',
    height: 68,
    width: 350,
    borderRadius: 10,
    borderWidth: 1,
    marginStart: 30,
    borderColor: '#E26F1E',
    marginTop: 20,
  },
  insideExercises: {
    alignItems: 'flex-start',
    borderColor: '#E26F1E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    height: 20,
  },
  exeText: {
    paddingStart: 10,
    color: 'black',
  },
  startButton: {
    width: 70,
    height: 30,
    borderColor: '#fff',
    backgroundColor: '#E26F1E',
    borderWidth: 2,
    borderRadius: 15,
    marginEnd: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
  },
});
