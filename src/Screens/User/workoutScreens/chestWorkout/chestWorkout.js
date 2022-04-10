import styles from "./styles";
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
            <Text style={styles.exeText}>Pushups</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Chest Fly</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Barbell Bench Press Lifts</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Dumbbell Bench Press</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Incline Bench Press</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Machine Chest Press</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Bodyweight Dip</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Dumbbell Fly</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Lever Seated Fly</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Cable Middle Fly</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Dumbbell Decline Bench Press</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Decline Pushups</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Lever Chest Press</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Wide Arm Pushup</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Smith Bench Press</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Cable Low Fly</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Clap Pushups</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Assisted Chest Dip</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Shoulder Tap Pushups</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Deep Pushups</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Suspended Pushups</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Dynamic Chest Stretch</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Shoulder Tap</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Pushup Medicine Ball</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
  