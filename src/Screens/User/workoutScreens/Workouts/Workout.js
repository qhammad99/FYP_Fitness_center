import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Workout({route}) {
  const {headerText, workoutName, sets, repetitions, calories, image} =
    route.params;
  return (
    <View style={styles.container}>

      {/* header section, containing workout name and header image */}
      <View style={styles.header}>
        <Image source={image} style={styles.headerImage} />
        <Text style={styles.headerText}> {headerText} </Text>
      </View>
      
      <ScrollView>
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
      </ScrollView>
    </View>
  );
}
