import styles from "./styles";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  
  export default function absWorkout() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../../../../images/absHeaderImage.png")}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}> Six Pack Abs Workouts </Text>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Bent Leg Twist</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Sit-Ups</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Reverse Crunches</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>V-Crunch</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Flutter Kicks</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Heel Touch</Text>
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
            <Text style={styles.exeText}>Butt Bridge</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>X Man Crunch</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Heels To The Heaven</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>V-Ups</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Dumbell Russian Twist</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Plank</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Cobra Stretch</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Dumbell Up-N-Overs</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Dumbell Crunch and Punches</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Sit-Up Twist</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Cross Knee Plank</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exercises}>
            <Text style={styles.exeText}>Abdominal Crunches</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }