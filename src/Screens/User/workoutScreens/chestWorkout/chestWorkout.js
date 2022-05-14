import styles from "./styles";
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  
  export default function chestWorkout() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../../../../images/chestHeaderImage.png")}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}> Chest Workouts </Text>
        </View>
        <ScrollView style={styles.scrollView}>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Push-Ups</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 15</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 27</Text>
            </View>
          </View>
         
         
          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Chest Fly</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 12</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 21</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Barbell Bench Press Lifts</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 14</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 18</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Dumbbell Bench Press</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>2X 15</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 25</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Incline Bench Press</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 12</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 18</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Machine Chest Press</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 14</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 30</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Bodyweight Dip</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 10</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 20</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Dumbbell Fly</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 16</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 28</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Lever Seated Fly</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>2X 12</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 21</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Cable Middle Fly</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 14</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 28</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Dumbbell Decline Bench Press</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 16</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 30</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Decline Pushups</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 15</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 26</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Lever Chest Press</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>2X 14</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 22</Text>
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
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 16</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 30</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Smith Bench Press</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>2X 18</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 32</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Cable Low Fly</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 14</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 18</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Clap Pushups</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 10</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 20</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Assisted Chest Dip</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 15</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 26</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Shoulder Tap Pushups</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>2X 15</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 27</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Deep Pushups</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 12</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 25</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Suspended Pushups</Text>
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
            <Text style={styles.exeText}>Dynamic Chest Stretch</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 12</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 16</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Shoulder Tap</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 16 (8 each side)</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 27</Text>
            </View>
          </View>


          <View style={styles.exercises}>
          <View style={styles.insideExercises}>
            <Text style={styles.exeText}>Pushup Medicine Ball</Text>
            <TouchableOpacity style={styles.startButton}>
           <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>3X 12</Text>
            </View>
            <View >
              <Text style={{color: 'grey', paddingStart: 10  }}>Calories: 24</Text>
            </View>
          </View>


        </ScrollView>
      </View>
    );
  }
  