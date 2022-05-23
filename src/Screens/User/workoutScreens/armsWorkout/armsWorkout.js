import styles from '../armsWorkout/styles';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
import react from "react";
  
  export default function armsWorkout() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../../../../images/armWorkoutHeaderImage.png")}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}> Arms Workouts </Text>
        </View>
        <ScrollView style={styles.scrollView}>
          
          <View style={styles.exercises}>
          <View style={[styles.insideExercises]}>
            <Text style={styles.exeText}>Jumping Jacks</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
           <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 20</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 9</Text>
            </View>
          </View>
          
          <View style={styles.exercises}>
            <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Push-Ups</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 10</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 27</Text>
            </View>
         </View>
           
          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Burpees</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>2X 10</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 18</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Side Plank</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>2X 30sec</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 14</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Tricep Dips</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>2X 20</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 18</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Superman</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>2X 8</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 10</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Inchworm</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 12</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 20</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Plank Taps</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>2X 12</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 15</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Inclined Push-Ups</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>2X 12</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 16</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Crab Crawl</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>2X 60sec</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 11</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Alternating Hooks</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>2X 13</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 9</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Up and Down Plank</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>2X 10</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 20</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Military Push-Ups</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 12</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 23</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Floor Triceps-Dips</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>2X 16</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 12</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Wide Arm Pushups</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 15</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 15</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Arm Stretch Left</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>2X 30sec</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 10</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Arm Stretch Right</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>2X 30sec</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 10</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }