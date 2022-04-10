import styles from "./styles";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  
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
            <Text style={styles.exeText}>Jumping Jacks</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Push-Ups</Text>
            <Image
              source={require("../armsWorkout/assets/pushups.gif")}
              style={styles.gif}
            />
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Burpees</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Side Plank</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Triceps Dip</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Superman</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Inchworm</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Plank Taps</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Inclined Push-Ups</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Crab Crawl</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Alternating Hooks</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Up and Down Plank</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Military Push-Ups</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Floor Triceps-Dip</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Wide Arm Push-Ups</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Arms Stretch Left</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Arms Stretch Right</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }