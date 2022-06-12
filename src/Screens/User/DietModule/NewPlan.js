import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../../colors/Colors';

export default function NewPlan() {
  const [data, setData] = useState([
    {
      id: 1,
      Rname: 'Recipe 1',
      calories: 123,
    },
    {
      id: 2,
      Rname: 'Recipe 2',
      calories: 123,
    },
    {
      id: 3,
      Rname: 'Recipe 3',
      calories: 123,
    },
  ]);

  const renderPlans = ({item, index}) => {
    return (
      <View style={styles.exercises}>
        <View style={styles.insideExercises}>
          {/* name of the recipes come here */}

          <Text style={styles.exeText}>{item.Rname}</Text>

          {/* add button */}

          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.startButtonText}> Add</Text>
          </TouchableOpacity>
        </View>

        {/* calories in the recipe */}
        <View>
          <Text style={{color: 'grey', paddingStart: 10}}>
            Calories: {item.calories}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <View style={{marginTop: 40, alignItems: 'center'}}>
        <Text style={{color: 'black', fontSize: 24, fontWeight: 'bold'}}>
          Create Your Diet Plan
        </Text>
      </View>

      <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
          Plan Name
        </Text>
        <TextInput
          placeholder="Enter Plan Name"
          placeholderTextColor="grey"
          style={styles.input}
        />

        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Select Recipes
        </Text>

        <View
          style={{
            alignItems: 'center',
            height: 240,
            backgroundColor: '#f2f3f8',
            borderRadius: 10,
            marginTop: 10,
          }}>
          <FlatList data={data} renderItem={renderPlans} />
        </View>

        {/* create plan button */}
        <View style={{alignItems: 'center', marginTop: 50}}>
          <TouchableOpacity
            style={{
              bottom: 30,
              width: 300,
              height: 38,
              backgroundColor: Colors.primary,
              padding: 6,
              alignItems: 'center',
              borderRadius: 5,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white'}}>Create Plan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  input: {
    color: 'black',
    height: 45,
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 5,
  },
  exercises: {
    backgroundColor: '#f2f3f8',
    height: 68,
    width: 350,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E26F1E',
    marginTop: 15,
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
