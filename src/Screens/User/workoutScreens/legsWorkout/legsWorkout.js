import styles from "./styles";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  
  export default function legsWorkout() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../../../../images/legsHeaderImage.png")}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}> Legs Workouts </Text>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Squats</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Lunges</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Plank Leg Lifts</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Single-Leg Deadlift</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Leg Press</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Skipping</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Mountain Climber</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Leg Curl</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Calf Raises</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Goblet Squats</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Glute Bridge</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Dumbbell Step-Up</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Wall Sit</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Leg Extensions</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Walking Lunge</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Hamstring Curl</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Hip Thrust</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Cable Pull Through</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Kettlebell Swing</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Barbell Deadlift</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Lever Seated Hip Adduction</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Bent Leg Kickback</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Barbell Romanian Deadlift</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Curtsey Squat</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
  